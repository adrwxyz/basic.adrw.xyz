import * as React from 'react'
import { Link } from 'gatsby'

import { Container, Header, Page } from '../components'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Andrew Paradi</h1>
        <p>
          Andrew is a software engineer at Square building scalable infrastructure for the growing Cash App. He graduated from University of
          Waterloo Computer Science in April 2018.
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
        <h1>ADRW Digital</h1>
        <p>Andrew has extensive experience helping teams ship products and marketing sales copy that better resonates with users.</p>
        <p>
          Check out past projects below. When you're ready, <a href="mailto:contact@adrw.xyz">contact Andrew</a> to discuss how ADRW Digital
          can help your team thrive.
        </p>
        <ul>
          <li>
            <a href="http://www.adrw.ch/blog/videostream-how-growth-starts-with-great-customer-support">Videostream</a>: Optimized new
            website & sales copy to boost weekly downloads 32% + active users 12% for 1.2M user app
          </li>
          <li>
            <a href="http://www.adrw.ch/project/atomic">Atomic.VC</a>: Built in 16 weeks from scratch 7 robust apps (5 React/Redux/KoaJS, 2
            iOS) for new VC vetted & funded ideas
          </li>
          <li>
            <a href="http://www.adrw.ch/project/christian-embassy">Christian Embassy</a>: New Wordpress website for ministry to Diplomats
            and MPs
          </li>
          <li>
            <a href="http://www.adrw.ch/project/franks-jewellers">Frank's Jewellers</a>: New Wordpress website for 100 year old Waterloo
            shop
          </li>
        </ul>
        <h5>
          <a href="http://www.adrw.ch/projects/">Other Projects</a>
        </h5>
        <h5>
          <a href="https://github.com/adrw">GitHub Projects</a>
        </h5>
        <Link to="/a-markdown-page/">Show me some Markdown!</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
