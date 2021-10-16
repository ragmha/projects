import MainSectionComponent from "components/MainSection"
import { Todos } from "models/Todo"
import { VisibilityFilter } from "models/VisibilityFilter"
import { TodoMutations } from "operations/mutations"
import {
  useGetAllTodosQuery,
  useGetVisibilityFilterQuery,
} from "operations/types/generated"

export const MainSection = () => {
  const { data: todosData } = useGetAllTodosQuery()
  const { data: visibilityFilterData } = useGetVisibilityFilterQuery()
  const {
    completeAllTodos,
    setVisibilityFilter,
    clearCompletedTodos,
  } = TodoMutations

  const activeVisibilityFilter = visibilityFilterData?.visibilityFilter as VisibilityFilter
  const todosCount = (todosData?.todos as Todos)?.length as number
  const completedCount = (todosData?.todos as Todos)?.filter(
    (todo) => todo?.completed
  ).length as number
  const actions = {
    clearCompletedTodos,
    setVisibilityFilter,
    completeAllTodos,
  }

  return (
    <MainSectionComponent
      activeVisibilityFilter={activeVisibilityFilter}
      todosCount={todosCount}
      completedCount={completedCount}
      actions={actions}
    />
  )
}

export default MainSection
