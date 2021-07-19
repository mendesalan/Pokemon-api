import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

import resolvers from '../graphql/resolvers'
import typeDefs from '../graphql/type-defs'

export const setupApolloServer = (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    playground: true,
    introspection: true
  })

  server.applyMiddleware({ app })
}
