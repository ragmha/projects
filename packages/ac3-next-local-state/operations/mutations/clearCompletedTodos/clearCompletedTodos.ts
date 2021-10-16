import { ReactiveVar } from "@apollo/client"
import { Todos } from "models/Todo"

export function createClearCompletedTodos(
  todosVar: ReactiveVar<Todos>
): () => void {
  return () => {
    const nonCompletedTodos = todosVar().filter(
      (todo) => todo.completed !== true
    )

    todosVar(nonCompletedTodos)
  }
}
