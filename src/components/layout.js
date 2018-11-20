import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

const Wrapper = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled('main')`
  flex-grow: 1;
  width: 90%;
  margin-left: 5%;
  padding: 2rem 0;
  color: #222;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author {
              name
              title
              shortBio
              social {
                github
                linkedin
                twitter
                medium
                facebook
                email
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${data.site.siteMetadata.author.name} | ${
            data.site.siteMetadata.author.title
          }`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Wrapper>
          <Header author={data.site.siteMetadata.author} />
          <Nav />
          <Main>{children}</Main>
          <Footer author={data.site.siteMetadata.author} />
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
