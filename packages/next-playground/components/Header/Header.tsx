import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { StyledHeader, StyledHeaderLink } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: FC<HeaderProps> = () => {
  const { pathname } = useRouter()

  return (
    <StyledHeader>
      <Link href="/">
        <StyledHeaderLink active={pathname === '/'}>Home</StyledHeaderLink>
      </Link>
      <Link href="/about">
        <StyledHeaderLink active={pathname === '/about'}>
          About
        </StyledHeaderLink>
      </Link>
      <Link href="/client-only">
        <StyledHeaderLink active={pathname === '/client-only'}>
          Client-Only
        </StyledHeaderLink>
      </Link>
    </StyledHeader>
  )
}

export default Header
