import "@testing-library/jest-dom"
import { configure } from "@testing-library/react"
import "../testServer"

configure({ testIdAttribute: "data-test-id" })

// re-export everything
export * from "@testing-library/react"
