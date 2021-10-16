import { ReactiveVar } from "@apollo/client"
import { Todos } from "models/Todo"

export function createCompleteTodo(todosVar: ReactiveVar<Todos>) {
  return (id: number): void => {
    const allTodos = todosVar()

    todosVar(
      allTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    )
  }
}

export default createCompleteTodo
