import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const Center = styled.div`
  text-align: center;
`;

const ItemList = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const ALL_ITEMS_QUERY = gql`
  query allItemsQuery {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Items = () => (
  <Center>
    <Query query={ALL_ITEMS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error {error.message}</p>;
        return (
          <ItemList>
            {data.items.map(item => (
              <Item item={item} key={item.id} />
            ))}
          </ItemList>
        );
      }}
    </Query>
  </Center>
);

export default Items;
export { ALL_ITEMS_QUERY };
