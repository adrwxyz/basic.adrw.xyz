import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import { Footer, Header, LayoutRoot, LayoutMain } from '../components'

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      logo: string
    }
  }
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            logo
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} logo={data.site.siteMetadata.logo} />
        <LayoutMain>
          {children}
          <Footer />
        </LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
