import { todosVar, visibilityFilterVar } from "operations/initial-values"
import { createAddTodo } from "./addTodo/addTodo"
import { createClearCompletedTodos } from "./clearCompletedTodos/clearCompletedTodos"
import { createCompleteAllTodos } from "./completeAllTodos/completeAllTodos"
import { createCompleteTodo } from "./completeTodo/completeTodo"
import { createDeleteTodo } from "./deleteTodo/deleteTodo"
import { createEditTodo } from "./editTodo/editTodo"
import { createSetVisibilityFilter } from "./setVisibilityFilter/setVisibilityFilter"

export const TodoMutations = {
  addTodo: createAddTodo(todosVar),
  clearCompletedTodos: createClearCompletedTodos(todosVar),
  completeTodo: createCompleteTodo(todosVar),
  completeAllTodos: createCompleteAllTodos(todosVar),
  deleteTodo: createDeleteTodo(todosVar),
  editTodo: createEditTodo(todosVar),
  setVisibilityFilter: createSetVisibilityFilter(visibilityFilterVar),
}
