import { FC } from 'react'
import { Button } from '@components/Button'
import { upVotePost } from '@services/Posts'

import { PostUpvoterProps } from './PostUpvoter.types'

export const PostUpvoter: FC<PostUpvoterProps> = ({ votes, id }) => {
  return <Button onClick={upVotePost(votes, id)}>{votes}</Button>
}

export default PostUpvoter
