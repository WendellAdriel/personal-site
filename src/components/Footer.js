import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const CustomLink = styled('a')`
  background-image: none;
  color: #fff;
  text-decoration: underline dashed;
  text-shadow: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline solid;
  }
`

const Footer = props => (
  <footer
    className={css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      background-color: #222;
      color: #fff;
      padding: 0.6rem;
    `}
  >
    <div>
      <CustomLink
        href="https://github.com/WendellAdriel/personal-site"
        target="_blank"
      >
        Built
      </CustomLink>{' '}
      with
      <span
        className={css`
          color: red;
        `}
      >
        {' '}
        ❤{' '}
      </span>
      by{' '}
      <CustomLink href="https://github.com/WendellAdriel">
        {props.author.name}
      </CustomLink>
    </div>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.object.isRequired,
}

export default Footer
