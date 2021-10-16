import { ReactiveVar } from "@apollo/client"
import { Todos } from "models/Todo"

export function createCompleteAllTodos(todosVar: ReactiveVar<Todos>) {
  return (): void => {
    const allCompletedTodos = todosVar().map((todo) => ({
      ...todo,
      completed: true,
    }))

    todosVar(allCompletedTodos)
  }
}
