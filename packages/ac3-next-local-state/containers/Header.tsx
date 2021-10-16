import HeaderComponent from "components/Header"
import { TodoMutations } from "operations/mutations"

export const Header = () => {
  return <HeaderComponent addTodo={TodoMutations.addTodo} />
}

export default Header
