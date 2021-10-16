import { TodoActions, Todos } from "models/Todo"
import TodoItem from "./TodoItem"

type TodoListProps = {
  filteredTodos: Todos
  actions: TodoActions
}
export const TodoList = (props: TodoListProps) => {
  return (
    <ul className="todo-list">
      {props.filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...props.actions} />
      ))}
    </ul>
  )
}

export default TodoList
