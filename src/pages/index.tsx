import * as React from "react";

import { Container, Page } from "../components";
import IndexLayout from "../layouts";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <p>
          ADRW Digital consults and helps startups successfully describe their
          product and team to customers, VCs, and judging panels.
        </p>
        <p>
          Check out past projects below. If you're looking to improve your hit
          rate in your next product launch, funding round, or competition,{" "}
          <a href="mailto:contact@adrw.xyz">let's talk</a>.
        </p>
        <ul>
          <li>
            <a href="http://www.adrw.ch/blog/videostream-how-growth-starts-with-great-customer-support">
              Videostream
            </a>
            : Optimized new website & sales copy to boost weekly downloads 32% +
            active users 12% for 1.2M user app.
          </li>
          <li>
            <a href="http://www.adrw.ch/project/atomic">Atomic.VC</a>: Built in
            16 weeks from scratch 7 robust apps (5 React/Redux/KoaJS, 2 iOS) for
            new VC vetted & funded ideas.
          </li>
          <li>
            <a href="http://www.adrw.ch/project/teknically-webplio">
              Teknically
            </a>
            : Developed presentations and written descriptions of Webplio
            product to win over $65,000 in different competitions and grants.
          </li>
        </ul>
        <h5>
          <a href="mailto:contact@adrw.xyz">Contact Us</a>
        </h5>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
