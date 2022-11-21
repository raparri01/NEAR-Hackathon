const path = require('path')

const { connect, providers, utils, keyStores } = require('near-api-js')

//network config (replace testnet with mainnet or betanet)
const provider = new providers.JsonRpcProvider(
  'https://archival-rpc.mainnet.near.org'
)
// 'https://archival-rpc.testnet.near.org'

const TX_HASH = '6sbxsSSbwA4QCaotEh8w1jRb6WaAbEUnEJPRhUFGsHdS'
// const TX_HASH = '9av2U6cova7LZPA9NPij6CTUrpBbgPG6LKVkyhcCqtk3'
// account ID associated with the transaction
// const ACCOUNT_ID = 'sender.testnet'
const ACCOUNT_ID =
  'c944e90c64b2c07662a292be6244bdf05cda44a7.factory.bridge.near'

// getState(TX_HASH, ACCOUNT_ID)

// async function getState(txHash, accountId) {
//   const result = await provider.txStatus(txHash, accountId)
//   console.log('Result: ', JSON.stringify(result, null, 2))
// }

// const amountInNEAR = utils.format.formatNearAmount('1000000000000000000000000')
// console.log(amountInNEAR)

const homedir = require('os').homedir()
const CREDENTIALS_DIR = '.near-credentials'
const credentialsPath = require('path').join(homedir, CREDENTIALS_DIR)
const myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath)

// block hash of query start (oldest block)
const START_BLOCK_HASH = 'GZ8vKdcgsavkEndkDWHCjuhyqSR2TGnp9VDZbTzd6ufG'
// const START_BLOCK_HASH = 'C1CLRw81bmEXfCBZMFEYE4kLMD8sYoCNTHzuhND7nNUg'
// block hash of query end (newest block)
const END_BLOCK_HASH = '8aEcKhF7N1Jyw84e6vHW6Hzp3Ep7mSXJ6Rvnsy5qGJPF'
// const END_BLOCK_HASH = '6sbxsSSbwA4QCaotEh8w1jRb6WaAbEUnEJPRhUFGsHdS'
// contract ID or account ID you want to find transactions details for
const CONTRACT_ID =
  'c944e90c64b2c07662a292be6244bdf05cda44a7.factory.bridge.near'

// const credentialsPath = path.join(homedir, CREDENTIALS_DIR)
const keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath)

// // NOTE: we're using the archival rpc to look back in time for a specific set
// // of transactions. For a full list of what nodes are available, visit:
// // https://docs.near.org/docs/develop/node/intro/types-of-node
const config = {
  keyStore,
  networkId: 'mainnet',
  nodeUrl: 'https://archival-rpc.mainnet.near.org',
}

getTransactions(START_BLOCK_HASH, END_BLOCK_HASH, CONTRACT_ID)

async function getTransactions(startBlock, endBlock, accountId) {
  const near = await connect(config)

  // creates an array of block hashes for given range
  const blockArr = []
  let blockHash = endBlock
  do {
    const currentBlock = await getBlockByID(blockHash)
    blockArr.push(currentBlock.header.hash)
    blockHash = currentBlock.header.prev_hash
    console.log('working...', blockHash)
  } while (blockHash !== startBlock)

  // returns block details based on hashes in array
  const blockDetails = await Promise.all(
    blockArr.map((blockId) =>
      near.connection.provider.block({
        blockId,
      })
    )
  )

  // returns an array of chunk hashes from block details
  const chunkHashArr = blockDetails.flatMap((block) =>
    block.chunks.map(({ chunk_hash }) => chunk_hash)
  )

  //returns chunk details based from the array of hashes
  const chunkDetails = await Promise.all(
    chunkHashArr.map((chunk) => near.connection.provider.chunk(chunk))
  )

  // checks chunk details for transactions
  // if there are transactions in the chunk we
  // find ones associated with passed accountId
  const transactions = chunkDetails.flatMap((chunk) =>
    (chunk.transactions || []).filter((tx) => tx.signer_id === accountId)
  )

  //creates transaction links from matchingTxs
  const txsLinks = transactions.map((txs) => ({
    method: txs.actions[0].FunctionCall.method_name,
    link: `https://explorer.testnet.near.org/transactions/${txs.hash}`,
  }))
  console.log('MATCHING TRANSACTIONS: ', transactions)
  console.log('TRANSACTION LINKS: ', txsLinks)
}

async function getBlockByID(blockID) {
  const near = await connect(config)
  const blockInfoByHeight = await near.connection.provider.block({
    blockId: blockID,
  })
  return blockInfoByHeight
}
