import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Todo, { TodoProps } from './Todo';

const GET_TODOS = gql`
  query getTodos {
    todos @client {
      id
      completed
      text
    }
    visibilitFilter @client
  }
`;

const getVisibileTodos = (todos: Array<TodoProps>, filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

function TodoList() {
  return (
    <Query query={GET_TODOS}>
      {({ data: { todos, visibilitFilter } }) => {
        return (
          <ul>
            <Todo id={todos.id} {...todos} />
          </ul>
        );
      }}
    </Query>
  );
}

export default TodoList;
