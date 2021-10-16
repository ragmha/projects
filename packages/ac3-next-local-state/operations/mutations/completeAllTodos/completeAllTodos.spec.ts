import { mockTodosVar } from "utils/test/__mocks__/mockTodosVar"
import { createCompleteAllTodos } from "./completeAllTodos"

const completeAllTodo = createCompleteAllTodos(mockTodosVar)

describe("completeAllTodos hook", () => {
  beforeEach(() => mockTodosVar([]))

  it("should complete all todos", () => {
    const todos = [
      { id: 0, text: "First Todo", completed: false },
      { id: 1, text: "Second Todo", completed: false },
      { id: 2, text: "Third Todo", completed: false },
    ]

    mockTodosVar(todos)

    completeAllTodo()

    expect(mockTodosVar()).toHaveLength(3)

    Object.keys(todos).map((todo) =>
      expect(mockTodosVar()[todo].completed).toBeTruthy()
    )
  })
})
