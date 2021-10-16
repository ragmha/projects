import { VisibilityFilters } from "models/VisibilityFilter"
import { makeVar } from "@apollo/client"

const todosInitialValue = [
  {
    id: 0,
    completed: false,
    text: "Learn AC3 with nextJS",
  },
]

export const todosVar = makeVar(todosInitialValue)
export const visibilityFilterVar = makeVar(VisibilityFilters.SHOW_ALL)
