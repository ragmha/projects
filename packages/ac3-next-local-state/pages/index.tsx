import { NextPage } from "next"
import App from "components/App"
import "todomvc-app-css/index.css"
import { ApolloProvider } from "@apollo/client"
import { client } from "lib/apollo-client"

const Index: NextPage = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default Index
