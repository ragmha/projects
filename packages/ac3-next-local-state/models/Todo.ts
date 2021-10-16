export type Todo = {
  text: string
  completed: boolean
  id: number
}

export type TodoActions = {
  editTodo: (id: number, text: string) => void
  deleteTodo: (id: number) => void
  completeTodo: (id: number) => void
}

export type Todos = Todo[]
