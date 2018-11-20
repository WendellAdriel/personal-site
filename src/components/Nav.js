import React from 'react'
import styled, { css } from 'react-emotion'
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

const StyledLink = styled(Link)`
  background-image: none;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: #23c9a8;
    border: 4px dashed #23c9a8;
  }
`

export default () => (
  <Nav>
    {pages.map(page => (
      <div
        key={page.route}
        className={css`
          margin-right: 2rem;
          font-size: 1.5rem;
          font-weight: bold;
          @media (max-width: 767px) {
            margin-bottom: 1rem;
          }
        `}
      >
        <StyledLink to={page.route}>{page.name}</StyledLink>
      </div>
    ))}
  </Nav>
)
