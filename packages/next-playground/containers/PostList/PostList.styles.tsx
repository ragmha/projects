import styled from 'styled-components'

export const StyledListUnordered = styled.ul`
  margin: 0;
  padding: 0;
`

export const StyledList = styled.li`
  display: block;
  margin-bottom: 10px;
`

export const StyledButton = styled.button`
  &:before {
    align-self: center;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #ffffff transparent transparent transparent;
    content: '';
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`

export const StyledDiv = styled.div`
  align-items: center;
  display: flex;
`

export const StyledSpan = styled.span`
  font-size: 14px;
  margin-right: 5px;
`

export const StyledAnchor = styled.a`
  font-size: 14px;
  margin-right: 10px;
  text-decoration: none;
  padding-bottom: 0;
  border: 0;
`
