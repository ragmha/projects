import { FC } from 'react'
import StyledErrorMessage from './ErrorMessage.styles'
import { ErrorMessageProps } from './ErrorMessage.types'

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <StyledErrorMessage>{message}</StyledErrorMessage>
)

export default ErrorMessage
