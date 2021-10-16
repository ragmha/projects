import { mockTodosVar } from "utils/test/__mocks__/mockTodosVar"
import createCompleteTodo from "./completeTodo"

const completeTodo = createCompleteTodo(mockTodosVar)

describe("completeTodo hook", () => {
  beforeEach(() => mockTodosVar([]))

  it("should mark a todo as completed", () => {
    mockTodosVar([{ id: 0, text: "First todo", completed: false }])
    completeTodo(0)

    expect(mockTodosVar()[0].completed).toBeTruthy()
  })
})
