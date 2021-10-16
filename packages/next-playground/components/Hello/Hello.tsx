import React, { FC } from 'react'
import StyledHello from './Hello.styles'
import { HelloProps } from './Hello.types'

export const Hello: FC<HelloProps> = ({ name }) => (
  <StyledHello>Hello {name}</StyledHello>
)

export default Hello
