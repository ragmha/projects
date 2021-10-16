import { useState } from "react"
import classnames from "classnames"

import TodoTextInput from "./TodoTextInput"
import { Todo, TodoActions } from "models/Todo"

type TodoItemProps = {
  todo: Todo
} & TodoActions

export const TodoItem = (props: TodoItemProps) => {
  const [editing, setEditing] = useState(false)

  const handleDoubleClick = () => setEditing(true)

  const handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      props.deleteTodo(id)
    } else {
      props.editTodo(id, text)
    }

    setEditing(false)
  }

  let element

  if (editing) {
    element = (
      <TodoTextInput
        text={props.todo.text}
        editing={editing}
        onSave={(text) => handleSave(props.todo.id, text)}
      />
    )
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.completeTodo(props.todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{props.todo.text}</label>
        <button
          className="destroy"
          onClick={() => props.deleteTodo(props.todo.id)}
        />
      </div>
    )
  }

  const listClassName = classnames({
    completed: props.todo.completed,
    editing: editing,
  })

  return <li className={listClassName}>{element}</li>
}

export default TodoItem
