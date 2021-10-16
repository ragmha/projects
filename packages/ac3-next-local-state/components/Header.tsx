import TodoTextInput from "./TodoTextInput"

type HeaderProps = {
  addTodo: (text: string) => void
}
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <h1>TODOS</h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            props.addTodo(text)
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  )
}

export default Header
