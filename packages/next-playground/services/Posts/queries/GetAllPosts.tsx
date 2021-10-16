import { gql, NetworkStatus } from '@apollo/client'
import {
  useGetAllPostsQuery,
  useGetAllPostsLazyQuery,
} from 'types/generated.gql.types'

export const ALL_POSTS_QUERY_VARS = {
  first: 10,
  skip: 0,
}

export const GET_ALL_POSTS = gql`
  query GetAllPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: { createdAt: desc }, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`

export const useAllPosts = () => {
  const {
    loading,
    error,
    data,
    fetchMore,
    networkStatus,
  } = useGetAllPostsQuery({
    variables: ALL_POSTS_QUERY_VARS,
    notifyOnNetworkStatusChange: true,
  })

  const allPosts = data?.allPosts
  const _allPostsMeta = data?._allPostsMeta

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: allPosts?.length,
      },
    })
  }

  const areMorePosts =
    (allPosts?.length as number) < (_allPostsMeta?.count as number)

  return {
    allPosts,
    _allPostsMeta,
    loading,
    error,
    loadingMorePosts,
    loadMorePosts,
    areMorePosts,
  }
}

export const useAllPostsLazy = () => {
  const [
    getPosts,
    { loading, error, data, fetchMore, networkStatus },
  ] = useGetAllPostsLazyQuery({
    variables: ALL_POSTS_QUERY_VARS,
    notifyOnNetworkStatusChange: true,
  })

  const allPosts = data?.allPosts
  const _allPostsMeta = data?._allPostsMeta

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  const loadMorePosts = () => {
    fetchMore &&
      fetchMore({
        variables: {
          skip: allPosts?.length,
        },
      })
  }

  const areMorePosts =
    (allPosts?.length as number) < (_allPostsMeta?.count as number)

  return {
    getPosts,
    allPosts,
    _allPostsMeta,
    loading,
    error,
    loadingMorePosts,
    loadMorePosts,
    areMorePosts,
  }
}
