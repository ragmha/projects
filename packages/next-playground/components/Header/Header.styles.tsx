import styled, { css } from 'styled-components'
import { HeaderLinkProps } from './Header.types'

export const StyledHeader = styled.header`
  margin-bottom: 25px;
`

export const StyledHeaderLink = styled.a<HeaderLinkProps>`
  font-size: 14px;
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
    `}
`
