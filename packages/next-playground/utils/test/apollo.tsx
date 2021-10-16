import { MockedResponse } from '@apollo/client/testing'
import { DefaultOptions, ApolloCache, Resolvers } from '@apollo/client'

export type ApolloOptions = {
  mocks?: MockedResponse[]
  addTypename?: boolean
  defaultOptions?: DefaultOptions
  cache?: ApolloCache<Record<string, unknown>>
  resolvers?: Resolvers
  [index: string]: unknown
}
