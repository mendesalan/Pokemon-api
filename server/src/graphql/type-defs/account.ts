import { gql } from 'apollo-server-express'

export default gql`
  type User {
    name: String
  }

  type Query {
   users: [User]
  }

  type Mutation {
    signup (email: String!, password: String!): String
  }
`
