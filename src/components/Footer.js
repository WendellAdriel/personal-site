import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faMedium,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'

const FooterIcon = styled('a')`
  background-image: none;
  text-decoration: none;
  color: #ddd;
  font-size: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: #fff;
  }
`

const Footer = props => (
  <footer
    className={css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      background-color: #222;
      color: #fff;
      padding: 0.6rem;
    `}
  >
    <div>
      <FooterIcon href={props.author.social.github} target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} />
      </FooterIcon>

      <FooterIcon href={props.author.social.linkedin} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </FooterIcon>

      <FooterIcon href={props.author.social.twitter} target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </FooterIcon>

      <FooterIcon href={props.author.social.medium} target="_blank">
        <FontAwesomeIcon icon={faMedium} />
      </FooterIcon>

      <FooterIcon href={props.author.social.facebook} target="_blank">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </FooterIcon>

      <FooterIcon href={props.author.social.email} target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </FooterIcon>
    </div>
    <div>
      Built with
      <span
        className={css`
          color: red;
        `}
      >
        {' '}
        ❤{' '}
      </span>
      by {props.author.name}
    </div>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.object.isRequired,
}

export default Footer
