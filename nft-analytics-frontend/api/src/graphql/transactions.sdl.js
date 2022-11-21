export const schema = gql`
  type PriceTimeStamp {
    value: Float!
    timestamp: String!
  }
  type Transaction {
    price: [PriceTimeStamp!]
    transactions: [PriceTimeStamp!]
  }

  type Query {
    transactionsForApp(appName: String): Transaction! @skipAuth
  }
`
