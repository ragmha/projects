import { ApolloClient } from "@apollo/client"

import { cache } from "operations/cache"
import { typeDefs } from "operations/typeDefs"

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  typeDefs,
})
