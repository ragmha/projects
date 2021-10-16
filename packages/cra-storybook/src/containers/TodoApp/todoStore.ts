import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';

// @defaults
const todoDefaults = {
  currentTodos: [],
};

// @client GQL ACTIONS
const GET_TODO = gql`
  query getTodo {
    currentTodos @client
  }
`;

const CLEAR_TODO = gql`
  mutation clearTodo {
    clearTodo @client
  }
`;

const ADD_TODO = gql`
  mutation addTodo($item: String) {
    addTodo(item: $item) @client
  }
`;

// @cache mutations REDUCERS
const addTodo = (_: any, { item }: any, { cache }: any) => {
  const query = GET_TODO;

  // Read the todo's from cache
  const { currentTodos } = cache.readQuery({ query });

  // Add the item to the current todos
  const updatedTodos = currentTodos.concat(item);

  // Update the cached todos
  cache.writeQuery({
    query,
    data: {
      currentTodos: updatedTodos,
    },
  });

  return null;
};

const clearTodo = (_: any, _args: any, { cache }: any) => {
  const query = GET_TODO;
  cache.writeQuery({ query, data: todoDefaults });
};

// @Store
const store = {
  defaults: todoDefaults,
  mutations: {
    addTodo,
    clearTodo,
  },
};

// @Helpers
const todoQueryHandler = {
  props: ({ ownProps, data: { currentTodos = [] } }: any) => ({
    ...ownProps,
    currentTodos,
  }),
};

const restQueryHandler = {
  props: ({ data }: any) => {
    if (data.loading) return { loading: data.loading };
    if (data.error) return { error: data.error };
    return { person: data.person, loading: false };
  },
};

// @remote GQL
const LUKE = gql`
  query luke {
    person @rest(type: "Person", path: "people/1") {
      name
    }
  }
`;

const withTodo = compose(
  graphql(GET_TODO, todoQueryHandler),
  graphql(ADD_TODO, { name: 'addTodoMutation' }),
  graphql(CLEAR_TODO, { name: 'clearTodoMutation' }),
  graphql(LUKE, restQueryHandler)
);

export { store as TodoStore, withTodo };
