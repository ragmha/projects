import { TodoList } from "components/TodoList"
import { Todos } from "models/Todo"
import { VisibilityFilter, VisibilityFilters } from "models/VisibilityFilter"
import { todosVar, visibilityFilterVar } from "operations/initial-values"

import { TodoMutations } from "operations/mutations"

const filterTodosByVisibility = (
  visibilityFilter: VisibilityFilter,
  todos: Todos
) => {
  switch (visibilityFilter.id) {
    case VisibilityFilters.SHOW_ALL.id:
      return todos
    case VisibilityFilters.SHOW_COMPLETED.id:
      return todos.filter((todo) => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE.id:
      return todos.filter((todo) => !todo.completed)
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`)
  }
}

export const VisibleTodoList = () => {
  const { completeTodo, deleteTodo, editTodo } = TodoMutations
  const todos = todosVar()
  const filteredTodos = filterTodosByVisibility(visibilityFilterVar(), todos)
  const actions = { completeTodo, deleteTodo, editTodo }

  return <TodoList filteredTodos={filteredTodos} actions={actions} />
}

export default VisibleTodoList
