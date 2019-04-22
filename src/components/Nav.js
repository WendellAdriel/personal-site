import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

const pages = [
  { name: 'About', route: '/' },
  { name: 'Skills', route: '/skills' },
  { name: 'CV', route: '/cv' },
]

const Nav = styled('nav')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const LinkWrapper = styled('div')`
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`

const StyledLink = styled(Link)`
  background-image: none;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    background: #1ca086;
    color: #fff;
    border-radius: 3px;
  }
`

export default () => (
  <Nav>
    {pages.map(page => (
      <LinkWrapper key={page.route}>
        <StyledLink
          to={page.route}
          activeStyle={{
            background: '#23c9a8',
            color: '#fff',
            borderRadius: '3px',
            textShadow: 'none',
          }}
        >
          {page.name}
        </StyledLink>
      </LinkWrapper>
    ))}
  </Nav>
)
