import { FC } from 'react'
import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: FC<ButtonProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
)

export default Button
