import { ReactiveVar } from "@apollo/client"
import { Todos } from "models/Todo"

export function createDeleteTodo(todosVar: ReactiveVar<Todos>) {
  return (id: number): void => {
    const allTodos = todosVar()
    const filteredTodos = allTodos.filter((todo) => todo.id !== id)
    todosVar(filteredTodos)
  }
}
