export const schema = gql`
  type UserExample {
    id: Int!
    name: String
    email: String
  }

  type Query {
    userExamples: [UserExample!]! @skipAuth
    userExample(id: Int!): UserExample @skipAuth
  }
`
