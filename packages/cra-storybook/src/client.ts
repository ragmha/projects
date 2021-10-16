import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import CreateClientStore from './create-client';
import { ApolloLink } from 'apollo-link';
import { RestLink } from 'apollo-link-rest';

// Set up Cache
const cache = new InMemoryCache();

// Set up Local State
const stateLink = CreateClientStore(cache);

// Set up Rest Link for REST API
const restLink = new RestLink({
  uri: 'https://swapi.co/api/',
});

// Initialize the Apollo Client
const Client = new ApolloClient({
  link: ApolloLink.from([stateLink, restLink]),
  cache,
});

export default Client;
