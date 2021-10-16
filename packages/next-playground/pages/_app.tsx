import { ThemeProvider } from 'styled-components'
import { AppProps as NextAppProps } from 'next/app'
import { useApollo } from 'lib/apolloClient'
import { NormalizedCacheObject, ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import { ReactNode } from 'react'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

interface AppProps extends NextAppProps {
  pageProps: {
    initialApolloState: NormalizedCacheObject
    children?: ReactNode
  }
}

export const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
