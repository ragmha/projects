import { ReactiveVar } from "@apollo/client"
import { VisibilityFilter } from "models/VisibilityFilter"

export function createSetVisibilityFilter(
  visibilityFilterVar: ReactiveVar<VisibilityFilter>
) {
  return (visibilityFilter: VisibilityFilter): void => {
    visibilityFilterVar(visibilityFilter)
  }
}
