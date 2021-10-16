import { VisibilityFilter, VisibilityFilters } from "models/VisibilityFilter"
import { createMockReactiveVar } from "../createMockReactiveVar"

export const mockVisibilityFilter = createMockReactiveVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
)
