import { todosVar, visibilityFilterVar } from "./initial-values"
import { InMemoryCache } from "@apollo/client"

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar()
          },
        },
        visibilityFilter: {
          read() {
            return visibilityFilterVar()
          },
        },
      },
    },
  },
})
