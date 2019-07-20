import React from 'react'
import Layout from '../components/layout'
import styled from 'react-emotion'

import { colors } from '../utils/base-visual-components'

const Wrapper = styled('div')`
  text-align: center;
`

const NotFoundText = styled('h1')`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 3rem;
  color: ${colors.warning};
`

const NotFoundImage = styled('img')`
  width: 50%;
  height: auto;
`

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <NotFoundText>Page not found :/</NotFoundText>
      <NotFoundImage
        src="https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif"
        alt="Page not found"
      />
    </Wrapper>
  </Layout>
)

export default NotFoundPage
