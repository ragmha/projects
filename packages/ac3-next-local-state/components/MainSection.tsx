import {
  VisibilityFilter,
  VisibilityFilterActions,
} from "models/VisibilityFilter"

import Footer from "./Footer"
import VisibleTodoList from "containers/VisibleTodoList"

type MainSectionProps = {
  activeVisibilityFilter: VisibilityFilter
  todosCount: number
  completedCount: number
  actions: VisibilityFilterActions
}

export const MainSection = (props: MainSectionProps) => {
  return (
    <section className="main">
      {!!props.todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={props.completedCount === props.todosCount}
            readOnly
          />
          <label onClick={props.actions.clearCompletedTodos}></label>
        </span>
      )}
      <VisibleTodoList />
      {!!props.todosCount && (
        <Footer
          activeVisibilityFilter={props.activeVisibilityFilter}
          completedCount={props.completedCount}
          activeCount={props.todosCount - props.completedCount}
          onClearCompleted={props.actions.clearCompletedTodos}
          setVisibilityFilter={props.actions.setVisibilityFilter}
        />
      )}
    </section>
  )
}

export default MainSection
