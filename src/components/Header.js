import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const StyledHeader = styled('header')`
  background-color: #222;
  width: 100%;
  text-align: center;
  padding: 3rem 1rem;
`

const MainTitle = styled('h1')`
  color: #fff;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
`

const SubTitle = styled('h2')`
  color: #fff;
  margin-top: 0;
  font-size: 2rem;
`

const ShortBio = styled('h3')`
  color: #fff;
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
