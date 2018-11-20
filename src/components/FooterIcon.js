import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyle = css`
  background-image: none;
  text-decoration: none;
  color: #ddd;
  font-size: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: #fff;
  }
`

const FooterIcon = props => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    className={iconStyle}
  >
    <FontAwesomeIcon icon={props.icon} />
  </a>
)

FooterIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default FooterIcon
