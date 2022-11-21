import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdHJhbnNhY3Rpb25zLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFByaWNlVGltZVN0YW1wIHtcbiAgICB2YWx1ZTogRmxvYXQhXG4gICAgdGltZXN0YW1wOiBTdHJpbmchXG4gIH1cbiAgdHlwZSBUcmFuc2FjdGlvbiB7XG4gICAgcHJpY2U6IFtQcmljZVRpbWVTdGFtcCFdXG4gICAgdHJhbnNhY3Rpb25zOiBbUHJpY2VUaW1lU3RhbXAhXVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdHJhbnNhY3Rpb25zRm9yQXBwKGFwcE5hbWU6IFN0cmluZyk6IFRyYW5zYWN0aW9uISBAc2tpcEF1dGhcbiAgfVxuYFxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9