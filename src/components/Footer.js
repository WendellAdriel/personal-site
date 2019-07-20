import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faMedium,
  faDev,
} from '@fortawesome/free-brands-svg-icons'

import FooterIcon from './FooterIcon'
import { colors } from '../utils/base-visual-components'

const StyledFooter = styled('footer')`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkgrey};
  color: ${colors.white};
  padding: 0.6rem;
`

const Footer = ({ author }) => (
  <StyledFooter>
    <div>
      <FooterIcon url={author.social.github} icon={faGithubSquare} />
      <FooterIcon url={author.social.linkedin} icon={faLinkedin} />
      <FooterIcon url={author.social.twitter} icon={faTwitterSquare} />
      <FooterIcon url={author.social.medium} icon={faMedium} />
      <FooterIcon url={author.social.dev} icon={faDev} />
      <FooterIcon url={author.social.email} icon={faEnvelope} />
    </div>
    <div>
      Built with <span style={{ color: 'red' }}>❤</span> by {author.name}
    </div>
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.object.isRequired,
}

export default Footer
