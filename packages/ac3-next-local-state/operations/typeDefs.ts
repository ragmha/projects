import { gql } from "@apollo/client"

export const typeDefs = gql`
  type Query {
    todos: [Todos]
    visibilityFilter: VisibilityFilter
  }

  type Todos {
    id: Int
    completed: Boolean
    text: String
  }

  type VisibilityFilter {
    id: String
    displayName: String
  }
`
