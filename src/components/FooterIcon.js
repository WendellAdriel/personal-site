import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { colors } from '../utils/base-visual-components'

const IconLink = styled('a')`
  background-image: none;
  text-decoration: none;
  color: ${colors.lightgrey};
  font-size: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: ${colors.white};
  }
`

const FooterIcon = props => (
  <IconLink href={props.url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={props.icon} />
  </IconLink>
)

FooterIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default FooterIcon
