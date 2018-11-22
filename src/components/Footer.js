import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faMedium,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'

import FooterIcon from './FooterIcon'

const StyledFooter = styled('footer')`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 0.6rem;
`

const Footer = props => (
  <StyledFooter>
    <div>
      <FooterIcon url={props.author.social.github} icon={faGithubSquare} />
      <FooterIcon url={props.author.social.linkedin} icon={faLinkedin} />
      <FooterIcon url={props.author.social.twitter} icon={faTwitterSquare} />
      <FooterIcon url={props.author.social.medium} icon={faMedium} />
      <FooterIcon url={props.author.social.facebook} icon={faFacebookSquare} />
      <FooterIcon url={props.author.social.email} icon={faEnvelope} />
    </div>
    <div>
      Built with <span style={{color: 'red'}}>❤</span> by {props.author.name}
    </div>
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.object.isRequired,
}

export default Footer
