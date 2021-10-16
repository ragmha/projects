import { mockTodosVar } from "utils/test/__mocks__/mockTodosVar"
import { createEditTodo } from "./editTodo"

const editTodo = createEditTodo(mockTodosVar)

describe("editTodo hook", () => {
  beforeEach(() => mockTodosVar([]))

  it("should mark a todo as completed", () => {
    mockTodosVar([{ id: 0, text: "First Todo", completed: false }])
    editTodo(0, "This was edited")

    expect(mockTodosVar()[0].text).toEqual("This was edited")
  })
})
