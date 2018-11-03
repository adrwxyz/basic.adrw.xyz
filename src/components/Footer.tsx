import * as React from 'react'
import styled from 'react-emotion'
import { Container, Page } from '../components'

interface FooterProps {
  className?: string
}

const StyledFooter = styled.div`
  margin: 10% 0;
`

const Footer: React.SFC<FooterProps> = ({ className }) => (
  <Container>
    <Page>
      <StyledFooter className={className}>
        &copy; <a href="https://adrw.xyz/">ADRW Digital</a> 2009-
        {new Date().getFullYear()}
      </StyledFooter>
    </Page>
  </Container>
)

export { Footer }
