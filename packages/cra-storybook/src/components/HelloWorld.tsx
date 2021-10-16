import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import faker from 'faker';

export const typeDefs = `
  type Query {
    helloWorld: String
  }

  schema {
    query: Query
  }
`;

export const mocks = {
  Query: () => ({
    helloWorld: () => faker.lorem.sentence(),
  }),
};

const HELLO_WORLD = gql`
  query hello {
    helloWorld
  }
`;

export function HelloWorld() {
  return (
    <Query query={HELLO_WORLD}>
      {({ loading, data, error }) => {
        if (loading) return `Loading...`;
        if (error) return `Error... ${error.message}`;
        return <h1>{data.helloWorld}</h1>;
      }}
    </Query>
  );
}
