import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const Header = props => (
  <header
    className={css`
      background-color: #222;
      width: 100%;
      text-align: center;
      padding: 3rem 1rem;
    `}
  >
    <h1
      className={css`
        color: #fff;
        margin-top: 0;
        margin-bottom: 1.5rem;
        font-size: 3.5rem;
      `}
    >
      {props.author.name}
    </h1>
    <h2
      className={css`
        color: #fff;
        margin-top: 0;
        font-size: 2rem;
      `}
    >
      {props.author.title}
    </h2>
    <h3
      className={css`
        color: #fff;
        margin-top: 0;
      `}
    >
      {props.author.shortBio}
    </h3>
  </header>
)

Header.propTypes = {
  author: PropTypes.object.isRequired,
}

export default Header
