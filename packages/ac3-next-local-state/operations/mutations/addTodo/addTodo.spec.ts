import { mockTodosVar } from "utils/test/__mocks__/mockTodosVar"
import { createAddTodo } from "./addTodo"

const addTodo = createAddTodo(mockTodosVar)

describe("addTodos Hook", () => {
  beforeEach(() => mockTodosVar([]))

  it("should add a todo", () => {
    addTodo("First Todo")
    expect(mockTodosVar()).toHaveLength(1)

    expect(mockTodosVar()[0].id).toEqual(0)

    expect(mockTodosVar()[0].completed).toEqual(false)

    expect(mockTodosVar()[0].text).toEqual("First Todo")
  })
})
