import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

const TOGGLE_TODO = gql`
  mutation toggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

function Todo({ id, text, completed }: TodoProps) {
  return (
    <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
      {toggleTodo => (
        <List onClick={toggleTodo} completed={completed}>
          {text}
        </List>
      )}
    </Mutation>
  );
}

export default Todo;

const List: any = styled.li`
  text-decoration: ${(props: { completed: boolean }) =>
    props.completed ? 'line-through' : 'none'};
`;
