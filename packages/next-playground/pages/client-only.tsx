import { NextPage } from 'next'
import { App, Header, InfoBox } from '@components'
import { Submit, PostList } from '@containers'

export const ClientOnlyPage: NextPage = () => {
  return (
    <App>
      <Header />
      <InfoBox>
        ℹ️ This page shows how use Apollo only in the client. If you{' '}
        <a href="/client-only">reload</a> this page, you will see a loader since
        Apollo didn&apos;t fetch any data on the server. This is useful when the
        page doesn&apos;t have SEO requirements or blocking data fetching
        requirements.
      </InfoBox>
      <Submit />
      <PostList />
    </App>
  )
}

export default ClientOnlyPage
