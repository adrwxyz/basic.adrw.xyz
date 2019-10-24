import { Link } from "gatsby";
import * as React from "react";
import styled from "react-emotion";
import { Container, Page } from "../components";

interface FooterProps {
  className?: string;
}

const StyledFooter = styled.div`
  margin: 10% 0;
`;

const Footer: React.SFC<FooterProps> = ({ className }) => (
  <Container>
    <Page>
      <StyledFooter className={className}>
        &copy; <Link to="/">ADRW Digital</Link> 2009-
        {new Date().getFullYear()} |{" "}
        <a href="https://andrew.fm/">Andrew Alexander</a>
      </StyledFooter>
    </Page>
  </Container>
);

export { Footer };
