import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { colors } from '../utils/base-visual-components'

const Wrapper = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled('main')`
  flex-grow: 1;
  width: 70%;
  margin-left: 15%;
  padding: 2rem 0;
  color: ${colors.darkgrey};

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 80%;
    margin-left: 10%;
  }

  @media (max-width: 767px) {
    width: 90%;
    margin-left: 5%;
    padding: 1rem 0;
  }
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
                blog
                github
                linkedin
                twitter
                medium
                dev
                email
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>
            {data.site.siteMetadata.author.name} |{' '}
            {data.site.siteMetadata.author.title}
          </title>
          <link
            rel="author"
            href="https://plus.google.com/+WendellAdriel?rel=author"
          />
          <link rel="canonical" href="https://wendelladriel.com" />

          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content={colors.darkgrey} />

          <meta
            name="description"
            content="Brazilian Software Engineer living in Portugal; Zend Certified PHP Engineer; Speaker; Writer; PHP/JS/Go/Open Source lover; Dungeon Master; Gamer"
          />
          <meta
            name="keywords"
            content="software, engineer, developer, speaker, writer, brazil, portugal, zend, php, javascript, open source, dungeon, master, gamer"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wendell_adriel" />
          <meta
            name="twitter:title"
            content="Wendell Adriel | Software Engineer"
          />
          <meta
            name="twitter:description"
            content="Brazilian Software Engineer living in Portugal; Zend Certified PHP Engineer; Speaker; Writer; PHP/JS/Go/Open Source lover; Dungeon Master; Gamer"
          />
          <meta
            property="twitter:image:src"
            content="https://www.gravatar.com/avatar/d36a082aacb53b6f76869748fb4b81d4"
          />

          <meta property="og:url" content="https://wendelladriel.com" />
          <meta
            property="og:title"
            content="Wendell Adriel | Software Engineer"
          />
          <meta
            property="og:image"
            content="https://www.gravatar.com/avatar/d36a082aacb53b6f76869748fb4b81d4"
          />
          <meta
            property="og:description"
            content="Brazilian Software Engineer living in Portugal; Zend Certified PHP Engineer; Speaker; Writer; PHP/JS/Go/Open Source lover; Dungeon Master; Gamer"
          />
          <meta
            property="og:site_name"
            content="Wendell Adriel | Software Engineer"
          />

          <meta itemprop="name" content="Wendell Adriel | Software Engineer" />
          <meta
            itemprop="description"
            content="Brazilian Software Engineer living in Portugal; Zend Certified PHP Engineer; Speaker; Writer; PHP/JS/Go/Open Source lover; Dungeon Master; Gamer"
          />
          <meta
            itemprop="image"
            content="https://www.gravatar.com/avatar/d36a082aacb53b6f76869748fb4b81d4"
          />
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
