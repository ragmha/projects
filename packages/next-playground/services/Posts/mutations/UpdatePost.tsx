import { gql } from '@apollo/client'
import { useUpdatePostMutation } from 'types/generated.gql.types'

export const UPDATE_POST = gql`
  mutation UpdatePost($id: String!) {
    votePost(id: $id) {
      id
      votes
      __typename
    }
  }
`

export const upVotePost = (votes: number, id: string) => {
  const [updatePost] = useUpdatePostMutation()

  return () => {
    updatePost({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        votePost: {
          __typename: 'Post',
          id,
          votes: votes + 1,
        },
      },
    })
  }
}
