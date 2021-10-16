// @resolvers -> A map of functions that your GraphQL queries and mutations call in order to read and write data to cache

import gql from 'graphql-tag';

let nextTodoID = 0;

const GET_TODOS = gql`
  query getTodos {
    todos @client {
      id
      text
      completed
    }
  }
`;

const COMPLETE_TODO = gql`
  fragment completeTodo on TodoItem {
    completed
  }
`;

export const resolvers: object = {
  Mutation: {
    addTodo: (parent: any, args: any, context: any) => {
      const query = GET_TODOS;
      const previous = context.cache.readQuery({ query });

      const newTodo = {
        id: nextTodoID++,
        text: args.text,
        completed: false,
        __typename: 'TodoItem',
      };
      const data = { todos: previous.todos.concat([newTodo]) };

      context.cache.writeData({ data });
      return newTodo;
    },
    toggleTodo: (parent: any, args: any, context: any) => {
      const fragment = COMPLETE_TODO;
      const id = `TodoItem:${args.id}`;
      const todo = context.cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };

      context.cache.writeFragment({ fragment, id, data });
      return null;
    },
  },
  Query: {},
};
