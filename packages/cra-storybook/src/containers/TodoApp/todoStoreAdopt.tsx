import * as R from 'ramda';
import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';

const ALL_TODOS = gql`
  query allTodos {
    todos: AllTodos {
      id
      title
      completed
    }
  }
`;

const todos = ({ render }: any) => (
  <Query query={ALL_TODOS}>{result => render(result)}</Query>
);

const CREATE_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

const createTodoCache = (cache: any, { data: { createTodo } }: any) => {
  const query = ALL_TODOS;
  const { todos } = cache.readQuery({ query });
  cache.writeQuery({
    query,
    data: { todos: R.concat(todos, [createTodo]) },
  });
};

const createTodo = ({ render }: any) => (
  <Mutation mutation={CREATE_TODO} update={createTodoCache}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
);

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $completed: Boolean) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

const updateTodoCache = (cache: any, { data: { updateTodo } }: any) => {
  const query = ALL_TODOS;
  const { todos } = cache.readQuery({ query });
  const idx = R.findIndex(R.propEq('id', updateTodo.id), todos);

  cache.writeQuery({
    query,
    data: { todos: R.update(idx, updateTodo, todos) },
  });
};

const updateTodo = ({ render }: any) => (
  <Mutation mutation={UPDATE_TODO} update={updateTodoCache}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
);

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

const deleteTodoCache = (cache: any, { data: { deleteTodo } }: any) => {
  const query = ALL_TODOS;
  const { todos } = cache.readQuery({ query });
  const byTodoId = R.propEq('id', deleteTodo.id);
  cache.writeQuery({
    query,
    data: { todos: R.reject(byTodoId, todos) },
  });
};

const deleteTodo = ({ render }: any) => (
  <Mutation mutation={DELETE_TODO} update={deleteTodoCache}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
);

export const TodoStoreContainer = adopt({
  todos,
  createTodo,
  updateTodo,
  deleteTodo,
});
