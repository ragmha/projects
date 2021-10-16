import classnames from "classnames"
import { KeyboardEvent, ChangeEvent, useState } from "react"

type TodoTextInputProps = {
  onSave: (text: string) => void
  text?: string
  placeholder?: string
  editing?: boolean
  newTodo?: boolean
}

export const TodoTextInput = (props: TodoTextInputProps) => {
  const [text, setText] = useState(props.text || "")

  const handleSubmit = (
    event: KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>
  ) => {
    const text = event.target.value.trim()
    if (event.key === "Enter") {
      props.onSave(text)

      if (props.newTodo) {
        setText("")
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (!props.newTodo) {
      props.onSave(event.target.value)
    }
  }

  const inputClassName = classnames({
    edit: props.editing,
    "new-todo": props.newTodo,
  })

  return (
    <input
      className={inputClassName}
      type="text"
      placeholder={props.placeholder}
      autoFocus={true}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  )
}
export default TodoTextInput
