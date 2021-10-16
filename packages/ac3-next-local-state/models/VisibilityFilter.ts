import { Todos } from "./Todo"

export type VisibilityFilter = {
  id: string
  displayName: string
}

export const VisibilityFilters = {
  SHOW_ALL: {
    id: "show_all",
    displayName: "All",
  },
  SHOW_COMPLETED: {
    id: "show_completed",
    displayName: "Completed",
  },
  SHOW_ACTIVE: {
    id: "show_active",
    displayName: "Active",
  },
}

export type VisibilityFilterActions = {
  clearCompletedTodos: () => void
  setVisibilityFilter: (filter: VisibilityFilter) => void
  completeAllTodos: (todos: Todos) => void
}
