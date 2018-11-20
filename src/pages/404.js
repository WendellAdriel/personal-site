import React from 'react'
import Layout from '../components/layout'
import { css } from 'react-emotion'

const NotFoundPage = () => (
  <Layout>
    <div className={css`
      text-align: center
    `}>
      <img
        src="https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif"
        alt="Page not found"
        className={css`
          width: 50%;
          height: auto;
        `}
      />
    </div>
  </Layout>
)

export default NotFoundPage
