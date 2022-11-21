import {
  near,
  log,
  json,
  JSONValueKind,
  BigInt,
} from "@graphprotocol/graph-ts";
import {
  Account,
  Buy,
  Transfer,
  SetSeriesPrice,
  UnhandledAction,
  NFT,
  NftVolumeDayData,
  NftVolumeHourData,
} from "../generated/schema";

const NFT_TRANSFER = "nft_transfer";
const NFT_TRANSFER_PAYOUT = "nft_transfer_payout";
const NFT_SET_SERIES_PRICE = "nft_set_series_price";
const NFT_BUY = "nft_buy";
const NFT_BURN = "nft_burn";
const NFT_DECREASE_SERIES_COPIES = "nft_decrease_series_copies";
const NFT_CREATE_SERIES = "nft_create_series";

const BI_ZERO = BigInt.fromString("0");
const BI_ONE = BigInt.fromString("1");
const BI_E9 = BigInt.fromString("1000000000");

const BI_DAY = BigInt.fromI32(86400);
const BI_HOUR = BigInt.fromI32(3600);
// const transferParsingRegex = /[A-Za-z0-9]+\.near/g;

export function handleReceipt(receipt: near.ReceiptWithOutcome): void {
  const actions = receipt.receipt.actions;

  for (let i = 0; i < actions.length; i++) {
    handleAction(
      actions[i],
      receipt.receipt,
      receipt.block.header,
      receipt.outcome
    );
  }
}
function handleAction(
  action: near.ActionValue,
  receipt: near.ActionReceipt,
  blockHeader: near.BlockHeader,
  outcome: near.ExecutionOutcome
): void {
  if (action.kind !== 2) return;
  const fc = action.toFunctionCall();
  const method = fc.methodName;

  // Start Test
  // const ua = UnhandledAction.load(receipt.id.toHexString());
  // if (!ua) {
  //   const nua = new UnhandledAction(receipt.id.toHexString());
  //   nua.log = method;
  //   nua.save();
  // }
  // End Test

  if (method) {
    if (method == NFT_TRANSFER) {
      const nftTransfer = Transfer.load(receipt.id.toHexString());
      if (!nftTransfer) {
        const newNftTransfer = new Transfer(receipt.id.toHexString());
        if (outcome && outcome.logs.length > 0) {
          let outcomeLog = outcome.logs[0].toString();
          let parsed = outcomeLog.replace("EVENT_JSON:", "");
          const parsedSplit = parsed.split(".");
          let from = "";
          let to = "";
          if (parsedSplit.length > 1) {
            if (parsedSplit[0].split(" ").length === 4)
              from = parsedSplit[0].split(" ")[3] + ".near";
            if (parsedSplit[1].split(" ").length === 3)
              to = parsedSplit[1].split(" ")[2] + ".near";
            if (to && from) {
              newNftTransfer.sender = from;
              newNftTransfer.receiver = to;
              newNftTransfer.timestamp = BigInt.fromString(
                blockHeader.timestampNanosec.toString()
              );
              updateAccount(from, false);
              updateAccount(to, true);
              newNftTransfer.save();
            }
          }
        }
      }
    } else if (method == NFT_BUY) {
      const nftBuy = Buy.load(receipt.id.toHexString());
      if (!nftBuy) {
        const newNftBuy = new Buy(receipt.id.toHexString());
        if (outcome && outcome.logs.length > 0) {
          let outcomeLog = outcome.logs[0].toString();
          let parsed = outcomeLog.replace("EVENT_JSON:", "");
          newNftBuy.log = outcomeLog;
          const obj = json.try_fromString(outcomeLog);
          if (!obj.isError) {
            const params = obj.value.toObject().get("params");
            if (params !== null) {
              const buyer = params.toObject().get("receiver_id");
              const price = params.toObject().get("price");
              const token = params.toObject().get("token_id");
              if (buyer && price && token) {
                newNftBuy.buyer = buyer.toString();
                newNftBuy.price = price.toString();
                newNftBuy.timestamp = BigInt.fromString(
                  blockHeader.timestampNanosec.toString()
                );
                newNftBuy.nft = token.toString();
                newNftBuy.save();
                initNFTDataEntities(
                  token.toString(),
                  blockHeader.timestampNanosec.toString()
                );
                updateVolumesNftBuy(
                  token.toString(),
                  blockHeader.timestampNanosec.toString(),
                  price.toString()
                );
                updateAccount(buyer.toString(), true);
              }
            }
          }
        }
      }
    }
    //   // } else if (method == NFT_SET_SERIES_PRICE) {
    //   //   const nftSetSeriesPrice = Transfer.load(receipt.id.toHexString());
    //   //   if (!nftSetSeriesPrice) {
    //   //     const newNftSetSeriesPrice = new Transfer(receipt.id.toHexString());
    //   //     newNftSetSeriesPrice.data = action.data.toString();
    //   //     newNftSetSeriesPrice.save();
    //   }
    else {
      const unhandledAction = UnhandledAction.load(receipt.id.toHexString());
      if (!unhandledAction) {
        const newUnhandledAction = new UnhandledAction(
          receipt.id.toHexString()
        );
        newUnhandledAction.method = method;
        newUnhandledAction.kind = action.kind.toString();
        if (outcome && outcome.logs.length > 0) {
          let outcomeLog = outcome.logs[0].toString();
          let parsed = outcomeLog.replace("EVENT_JSON:", "");
          const obj = json.try_fromString(outcomeLog);
          // const receiver = obj.value.toObject().get("receiver_id");
          // const price = obj.value.toObject().get("price");
          // let log = "";
          // if (receiver) {
          //   log += receiver.toString();
          // }
          // if (price) {
          //   log += price.toString();
          // }
          // newUnhandledAction.log = log;
        }
        newUnhandledAction.save();
      }
    }
  }
}

function updateAccount(id: string, receiving: boolean): void {
  let account = Account.load(id);
  if (!account) {
    account = new Account(id);
    account.nftTotal = 0;
    account.nftTransfers = 0;
  }
  account.nftTransfers += 1;
  if (receiving) account.nftTotal += 1;
  else account.nftTotal -= 1;

  account.save();
}

function initNFTDataEntities(token: string, timestamp: string): void {
  const nft = NFT.load(token);
  const collection = token.split(":")[0];
  const item = token.split(":")[1];
  if (!nft) {
    const nNft = new NFT(token);
    const parsedTimestamp = BigInt.fromString(timestamp).div(BI_E9);
    const dateTimestamp = parsedTimestamp.div(BI_DAY);
    const hourTimestamp = parsedTimestamp.div(BI_HOUR);
    const nNftVolumeDayData = new NftVolumeDayData(
      `${token.toString()}-${dateTimestamp.toString()}`
    );
    nNftVolumeDayData.date = dateTimestamp;
    nNftVolumeDayData.volume = BI_ZERO;
    nNftVolumeDayData.collection = BigInt.fromString(collection);
    const nNftVolumeHourData = new NftVolumeHourData(
      `${token.toString()}-${hourTimestamp.toString()}`
    );

    nNftVolumeHourData.date = hourTimestamp;
    nNftVolumeHourData.volume = BI_ZERO;
    nNftVolumeHourData.collection = BigInt.fromString(collection);
    nNft.save();
    nNftVolumeDayData.save();
    nNftVolumeHourData.save();
  }
}

function updateVolumesNftBuy(
  token: string,
  timestamp: string,
  price: string
): void {
  if (!token || !timestamp || !price) return;
  const collection = token.split(":")[0];
  const item = token.split(":")[1];
  const parsedTimestamp = BigInt.fromString(timestamp).div(BI_E9);
  const dateTimestamp = parsedTimestamp.div(BI_DAY);
  const hourTimestamp = parsedTimestamp.div(BI_HOUR);
  const nvdd = NftVolumeDayData.load(
    `${token.toString()}-${dateTimestamp.toString()}`
  );
  if (nvdd) {
    const currentVolume = nvdd.volume ? nvdd.volume : BI_ZERO;
    const currentActionCount = nvdd.totalActionCount
      ? nvdd.totalActionCount
      : BI_ZERO;
    if (currentVolume && currentActionCount) {
      nvdd.volume = currentVolume.plus(BigInt.fromString(price));
      nvdd.totalActionCount = currentActionCount.plus(BI_ONE);
      nvdd.averagePrice = currentVolume
        .plus(BigInt.fromString(price))
        .div(currentActionCount.plus(BI_ONE));
      nvdd.collection = BigInt.fromString(collection);
      nvdd.save();
    }
  }
  const nvhd = NftVolumeHourData.load(
    `${token.toString()}-${hourTimestamp.toString()}`
  );
  if (nvhd) {
    const currentVolume = nvhd.volume ? nvhd.volume : BI_ZERO;
    const currentActionCount = nvhd.totalActionCount
      ? nvhd.totalActionCount
      : BI_ZERO;
    if (currentVolume && currentActionCount) {
      nvhd.volume = currentVolume.plus(BigInt.fromString(price));
      nvhd.totalActionCount = currentActionCount.plus(BI_ONE);
      nvhd.averagePrice = currentVolume
        .plus(BigInt.fromString(price))
        .div(currentActionCount.plus(BI_ONE));
      nvhd.collection = BigInt.fromString(collection);
      nvhd.save();
    }
  }
}

// const updateNFT = () => {};
