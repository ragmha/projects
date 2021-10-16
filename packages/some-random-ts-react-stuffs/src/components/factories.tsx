import { Component } from "react";

// models.ts
export const Todo = (description: string) => ({
  id: String(Date.now()),
  done: false,
  description,
});

export interface Todo extends ReturnType<typeof Todo> {}

// consumers.ts

// Todo is both factory and a type

type State = typeof initialState;
const initialState = Object.freeze({
  // Todo used as type
  todos: null as null | Todo[],
});

class App extends Component<{}, State> {
  readonly state = initialState;
  handleTodoCreation = (description: string) => {
    const newTodo = Todo(description);
  };
}
