import * as React from 'react'
import styled from 'react-emotion'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import { Container } from '../components'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 5rem ${dimensions.containerPadding}rem;
  // background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.brand)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.brand};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Logo = styled.img`
  max-height: 100px;
`

interface HeaderProps {
  title?: string
  logo?: string
}

const Header: React.SFC<HeaderProps> = ({ title, logo }) => (
  <StyledHeader>
    <HeaderInner>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export { Header }
