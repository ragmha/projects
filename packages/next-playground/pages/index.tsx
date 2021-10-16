import React from 'react'
import { NextPage } from 'next'
import { App, Header, InfoBox } from '@components'
import { Submit, PostList } from '@containers'
import { initializeApollo } from 'lib/apolloClient'
import { GET_ALL_POSTS, ALL_POSTS_QUERY_VARS } from '@services'

export const IndexPage: NextPage = () => {
  return (
    <App>
      <Header />
      <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
      <Submit />
      <PostList />
    </App>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_ALL_POSTS,
    variables: ALL_POSTS_QUERY_VARS,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default IndexPage
