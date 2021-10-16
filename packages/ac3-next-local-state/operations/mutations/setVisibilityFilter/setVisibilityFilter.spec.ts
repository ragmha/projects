import { VisibilityFilters } from "models/VisibilityFilter"
import { mockVisibilityFilter } from "utils/test/__mocks__/mockVisibilityFilter"
import { createSetVisibilityFilter } from "./setVisibilityFilter"

const setVisibilityFilter = createSetVisibilityFilter(mockVisibilityFilter)

describe("setVisibilityFilter hook", () => {
  beforeEach(() => mockVisibilityFilter(VisibilityFilters.SHOW_ALL))

  it("should change the visibility filter", () => {
    setVisibilityFilter(VisibilityFilters.SHOW_ALL)

    expect(mockVisibilityFilter().displayName).toEqual("All")

    setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)

    expect(mockVisibilityFilter().displayName).toEqual("Active")

    setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)

    expect(mockVisibilityFilter().displayName).toEqual("Completed")
  })
})
