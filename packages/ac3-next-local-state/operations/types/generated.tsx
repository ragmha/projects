import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename: "Query"
  todos: Maybe<Array<Maybe<Todos>>>
  visibilityFilter: Maybe<VisibilityFilter>
}

export type Todos = {
  __typename: "Todos"
  id: Maybe<Scalars["Int"]>
  completed: Maybe<Scalars["Boolean"]>
  text: Maybe<Scalars["String"]>
}

export type VisibilityFilter = {
  __typename: "VisibilityFilter"
  id: Maybe<Scalars["String"]>
  displayName: Maybe<Scalars["String"]>
}

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never }>

export type GetAllTodosQuery = { __typename: "Query" } & {
  todos: Maybe<
    Array<
      Maybe<{ __typename: "Todos" } & Pick<Todos, "id" | "text" | "completed">>
    >
  >
}

export type GetVisibilityFilterQueryVariables = Exact<{ [key: string]: never }>

export type GetVisibilityFilterQuery = { __typename: "Query" } & {
  visibilityFilter: Maybe<
    { __typename: "VisibilityFilter" } & Pick<
      VisibilityFilter,
      "id" | "displayName"
    >
  >
}

export const GetAllTodosDocument = gql`
  query GetAllTodos {
    todos @client {
      id
      text
      completed
    }
  }
`

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllTodosQuery,
    GetAllTodosQueryVariables
  >
) {
  return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(
    GetAllTodosDocument,
    baseOptions
  )
}
export function useGetAllTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTodosQuery,
    GetAllTodosQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(
    GetAllTodosDocument,
    baseOptions
  )
}
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>
export type GetAllTodosLazyQueryHookResult = ReturnType<
  typeof useGetAllTodosLazyQuery
>
export type GetAllTodosQueryResult = Apollo.QueryResult<
  GetAllTodosQuery,
  GetAllTodosQueryVariables
>
export const GetVisibilityFilterDocument = gql`
  query GetVisibilityFilter {
    visibilityFilter @client {
      id
      displayName
    }
  }
`

/**
 * __useGetVisibilityFilterQuery__
 *
 * To run a query within a React component, call `useGetVisibilityFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVisibilityFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVisibilityFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVisibilityFilterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVisibilityFilterQuery,
    GetVisibilityFilterQueryVariables
  >
) {
  return Apollo.useQuery<
    GetVisibilityFilterQuery,
    GetVisibilityFilterQueryVariables
  >(GetVisibilityFilterDocument, baseOptions)
}
export function useGetVisibilityFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVisibilityFilterQuery,
    GetVisibilityFilterQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetVisibilityFilterQuery,
    GetVisibilityFilterQueryVariables
  >(GetVisibilityFilterDocument, baseOptions)
}
export type GetVisibilityFilterQueryHookResult = ReturnType<
  typeof useGetVisibilityFilterQuery
>
export type GetVisibilityFilterLazyQueryHookResult = ReturnType<
  typeof useGetVisibilityFilterLazyQuery
>
export type GetVisibilityFilterQueryResult = Apollo.QueryResult<
  GetVisibilityFilterQuery,
  GetVisibilityFilterQueryVariables
>
