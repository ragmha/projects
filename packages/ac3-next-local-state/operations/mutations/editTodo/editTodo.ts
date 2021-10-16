import { ReactiveVar } from "@apollo/client"
import { Todos } from "models/Todo"

export function createEditTodo(todosVar: ReactiveVar<Todos>) {
  return (id: number, text: string): void => {
    const todosWithEditedTodo = todosVar().map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    )

    todosVar(todosWithEditedTodo)
  }
}
