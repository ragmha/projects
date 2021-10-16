import { mockTodosVar } from "utils/test/__mocks__/mockTodosVar"
import { createDeleteTodo } from "./deleteTodo"

const deleteTodo = createDeleteTodo(mockTodosVar)

describe("deleteTodo hook", () => {
  beforeEach(() => mockTodosVar([]))

  it("should delete a todo from the list of todos", () => {
    mockTodosVar([{ id: 0, text: "First Todo", completed: false }])
    deleteTodo(0)

    expect(mockTodosVar().length).toEqual(0)
  })
})
