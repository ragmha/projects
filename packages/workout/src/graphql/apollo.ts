import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { RestLink } from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { resolvers, defaults, typeDefs } from './local-state';

const cache = new InMemoryCache();

const restLink = new RestLink({ uri: 'uri' });

const stateLink = withClientState({ resolvers, defaults, cache, typeDefs });

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, restLink]),
});

export default client;
