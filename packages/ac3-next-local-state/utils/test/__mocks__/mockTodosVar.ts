import { Todos } from "models/Todo"
import { createMockReactiveVar } from "../createMockReactiveVar"

export const mockTodosVar = createMockReactiveVar<Todos>([])
