import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_URL
})

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key: string, value: any) =>
      key === '__typename' ? undefined : value
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      omitTypename
    )
  }
  return forward(operation).map((data) => {
    return data
  })
})

const client = new ApolloClient({
  link: ApolloLink.from([cleanTypeName, httpLink]),
  cache: new InMemoryCache({ addTypename: false })
})

export default client
