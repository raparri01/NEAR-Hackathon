import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlckV4YW1wbGVzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFVzZXJFeGFtcGxlIHtcbiAgICBpZDogSW50IVxuICAgIG5hbWU6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXJFeGFtcGxlczogW1VzZXJFeGFtcGxlIV0hIEBza2lwQXV0aFxuICAgIHVzZXJFeGFtcGxlKGlkOiBJbnQhKTogVXNlckV4YW1wbGUgQHNraXBBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9