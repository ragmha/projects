import Link from "./Link"
import { VisibilityFilter, VisibilityFilters } from "models/VisibilityFilter"

type FooterProps = {
  activeVisibilityFilter: VisibilityFilter
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  setVisibilityFilter: (filter: VisibilityFilter) => void
}
export const Footer = (props: FooterProps) => {
  const itemWord = props.activeCount === 1 ? "item" : "items"

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.activeCount || "No"}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(VisibilityFilters)
          .map((key) => VisibilityFilters[key])
          .map((filter) => (
            <li key={filter.id}>
              <Link
                active={props.activeVisibilityFilter.id === filter.id}
                setFilter={() => props.setVisibilityFilter(filter)}
              >
                {filter.displayName}
              </Link>
            </li>
          ))}
      </ul>
      {!!props.completedCount && (
        <button className="clear-completed" onClick={props.onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default Footer
