import { gql } from '@apollo/client'
import { ALL_POSTS_QUERY_VARS, GET_ALL_POSTS } from '@services'
import { useCreatePostMutation } from 'types/generated.gql.types'

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`

export const useCreatePost = () => {
  const [createPost, { loading }] = useCreatePostMutation({
    update: (cache, { data }) => {
      const existingData: any = cache.readQuery({
        query: GET_ALL_POSTS,
        variables: ALL_POSTS_QUERY_VARS,
      })

      // Update the cache with the new post at the top of the list
      cache.writeQuery({
        query: GET_ALL_POSTS,
        variables: ALL_POSTS_QUERY_VARS,
        data: {
          ...existingData,
          allPosts: [data?.createPost, ...existingData?.allPosts],
        },
      })
    },
  })

  return { createPost, loading }
}
