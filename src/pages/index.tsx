import * as React from "react"

import { Container, Page } from "../components"
import IndexLayout from "../layouts"

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Andrew Paradi Alexander</h1>
        <p>
          I'm a software engineer at Square building
          [Misk](https://github.com/square/misk) and [Misk
          Web](https://github.com/square/misk-web) scalable platforms for the
          Cash App. I studied Computer Science at University of Waterloo.
        </p>
        <h5>
          <a href="http://adrw.ch/about">About</a>
        </h5>
        <h5>
          <a href="http://adrw.ch/experience">Experience</a>
        </h5>
        <h5>
          <a href="http://adrw.ch/projects">Projects</a>
        </h5>
        <h5>
          <a href="http://adrw.ch/blog">Blog</a>
        </h5>
        <h5>
          <a href="http://adrw.ch/contact">Contact</a>
        </h5>
        <h5>
          <a href="http://resume.adrw.ch">Resume</a>
        </h5>
        <h5>
          <a href="mailto:andrew@adrw.ch">andrew@adrw.xyz</a>
        </h5>
        <h5>
          <a href="http://g.adrw.ch">GitHub @adrw</a>
        </h5>
        <h5>
          <a href="http://li.adrw.ch/">LinkedIn</a>
        </h5>
        <br />
        <br />
        <br />
        <h1>ADRW Digital</h1>
        <p>
          I have experience helping startups successfully describe their product
          and team to customers, VCs, and judging panels. If you're looking to
          improve your hit rate in your next product launch, funding round, or
          competition, let's talk.
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
            active users 12% for 1.2M user app
          </li>
          <li>
            <a href="http://www.adrw.ch/project/atomic">Atomic.VC</a>: Built in
            16 weeks from scratch 7 robust apps (5 React/Redux/KoaJS, 2 iOS) for
            new VC vetted & funded ideas
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
          <a href="http://www.adrw.ch/projects/">Other Projects</a>
        </h5>
        <h5>
          <a href="https://github.com/adrw">GitHub Projects</a>
        </h5>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
