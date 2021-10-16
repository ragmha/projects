import { FC } from 'react'

import { StyledInfoBox } from './InfoBox.styles'

export const InfoBox: FC = ({ children }) => (
  <StyledInfoBox>{children}</StyledInfoBox>
)

export default InfoBox
