import { FC } from 'react'
import { useAllPosts } from '@services'
import { Section, ErrorMessage } from '@components'
import { PostUpvoter } from '@containers'

import {
  StyledListUnordered,
  StyledButton,
  StyledList,
  StyledDiv,
  StyledSpan,
  StyledAnchor,
} from './PostList.styles'

export const PostList: FC = () => {
  const {
    loading,
    error,
    loadingMorePosts,
    allPosts,
    areMorePosts,
  } = useAllPosts()

  if (loading && !loadingMorePosts) {
    return <div>Loading...</div>
  }

  if (error) {
    return <ErrorMessage message="Error loading posts" />
  }

  return (
    <Section>
      <StyledListUnordered>
        {allPosts?.map((post, index) => (
          <StyledList key={post.id}>
            <StyledDiv>
              <StyledSpan>{index + 1}</StyledSpan>
              <StyledAnchor href={post.url}>{post.title}</StyledAnchor>
              <PostUpvoter id={post.id} votes={post.votes} />
            </StyledDiv>
          </StyledList>
        ))}
      </StyledListUnordered>
      {areMorePosts && (
        <StyledButton>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </StyledButton>
      )}
    </Section>
  )
}

export default PostList
