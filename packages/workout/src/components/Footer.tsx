import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

const GET_VISIBILITY_FILTER = gql`
  query getVisibilityFilter {
    visibilityFilter @client
  }
`;

interface FilterProps {
  filter: string;
  children: React.ReactNode;
}

function FilterLink({ filter, children }: FilterProps) {
  return (
    <Query query={GET_VISIBILITY_FILTER}>
      {({ data, client }) => (
        <Link
          onClick={() =>
            client.writeData({ data: { visibilityFilter: filter } })
          }
          active={data.visibilityFilter === filter}
        >
          {children}
        </Link>
      )}
    </Query>
  );
}

function Footer() {
  return (
    <p>
      Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
      {', '}
      <FilterLink filter="ACTIVE">Active</FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
}

export default Footer;
