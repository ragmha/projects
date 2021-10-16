import { configure, render, RenderResult } from '@testing-library/react'
import { ReactElement, ComponentType } from 'react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import { MockedProvider } from '@apollo/client/testing'

import { defaultTheme } from './styled'
import { mockRouter } from './router'
import { RenderUI, RenderOptions } from './index.types'

configure({ testIdAttribute: 'data-test-id' })

const AllProviders = ({
  children,
  router,
  mocks,
  addTypename = false,
  defaultOptions,
  cache,
  resolvers,
  theme = defaultTheme,
}: RenderOptions): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <MockedProvider
          mocks={mocks}
          addTypename={addTypename}
          defaultOptions={defaultOptions}
          cache={cache}
          resolvers={resolvers}
        >
          {children}
        </MockedProvider>
      </RouterContext.Provider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: RenderUI,
  renderOptions?: RenderOptions
): RenderResult => {
  return render(ui, {
    wrapper: AllProviders as ComponentType,
    ...renderOptions,
  })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
