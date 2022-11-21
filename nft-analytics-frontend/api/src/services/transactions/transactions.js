import axios from 'axios'

export const transactionsForApp = async ({ appName }) => {
  const res = await axios.get(
    `https://backend-mainnet-1713.onrender.com/trpc/transaction.listByAccountId?batch=1&input=%7B%220%22%3A%7B%22accountId%22%3A%22${appName}%22%2C%22limit%22%3A9999%2C%22cursor%22%3A%7B%22timestamp%22%3A%221667076711696785617%22%2C%22indexInChunk%22%3A3%7D%7D%7D`
  )
  const price = []
  const tempTransactions = []
  const transactions = []
  const items = res?.data[0]?.result?.data?.items || []
  items.forEach((item) => {
    if (item?.actions[0].kind === 'transfer') {
      price.push({
        value: (
          item?.actions[0].args.deposit / 1000000000000000000000000
        ).toFixed(2),
        timestamp: new Date(item.blockTimestamp).toISOString().slice(0, 10),
      })
      tempTransactions.push({
        value: (
          item?.actions[0].args.deposit / 1000000000000000000000000
        ).toFixed(2),
        timestamp: new Date(item.blockTimestamp).toISOString().slice(0, 10),
      })
    }
  })
  const transactionsObject = {}
  tempTransactions.forEach((item) => {
    transactionsObject[item.timestamp] = transactionsObject[item.timestamp]
      ? transactionsObject[item.timestamp] + 1
      : 1
  })
  Object.keys(transactionsObject).forEach((key) => {
    transactions.push({
      value: transactionsObject[key],
      timestamp: key,
    })
  })
  return { price: price.reverse(), transactions: transactions.reverse() }
}
