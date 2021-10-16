import { FC } from 'react'

import { StyledSection } from './Section.styles'

export const Section: FC = ({ children }) => (
  <StyledSection>{children}</StyledSection>
)

export default Section
