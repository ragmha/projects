import { FC } from 'react'
import { useCreatePost } from '@services'

import { Input, Header, Form } from './Submit.styles'

export const Submit: FC = () => {
  const { loading, createPost } = useCreatePost()
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const title = formData.get('title') as string
    const url = formData.get('url') as string
    form.reset()

    createPost({ variables: { title, url } })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Header>Submit</Header>
      <Input placeholder="title" name="title" type="text" required />
      <Input placeholder="url" name="url" type="url" required />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </Form>
  )
}

export default Submit
