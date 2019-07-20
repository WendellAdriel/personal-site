import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import { colors } from '../utils/base-visual-components'

const StyledHeader = styled('header')`
  background-color: ${colors.darkgrey};
  width: 100%;
  text-align: center;
  padding: 3rem 1rem;
`

const MainTitle = styled('h1')`
  color: ${colors.white};
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
`

const SubTitle = styled('h2')`
  color: ${colors.white};
  margin-top: 0;
  font-size: 2rem;
`

const ShortBio = styled('h3')`
  color: ${colors.white};
  margin-top: 0;
`

const Header = props => (
  <StyledHeader>
    <MainTitle>{props.author.name}</MainTitle>
    <SubTitle>{props.author.title}</SubTitle>
    <ShortBio>{props.author.shortBio}</ShortBio>
  </StyledHeader>
)

Header.propTypes = {
  author: PropTypes.object.isRequired,
}

export default Header
