import { render } from '@testing-library/react'

import { RouterOptions } from './router'
import { StyledOptions } from './styled'
import { ApolloOptions } from './apollo'
import { ReactElement } from 'react'

export type DefaultParams = Parameters<typeof render>
export type DefaultRenderOptions = DefaultParams[1]

export type ReactOptions = {
  children: ReactElement
}
export type RenderUI = DefaultParams[0]
export type RenderOptions = DefaultParams[1] &
  ApolloOptions &
  RouterOptions &
  StyledOptions &
  ReactOptions
