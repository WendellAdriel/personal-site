import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const CVBox = styled('div')`
  display: flex;
  width: 80%;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  border: ${props => `5px dashed ${props.color}`};
  border-radius: 5px;
  padding: 1rem;
  margin-left: 5%;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${props => props.color};
    border: ${props => `5px solid ${props.color}`};
    color: #fff;
  }

  @media (max-width: 767px) {
    flex: 0 0 100%;
    width: 100%;
    margin-left: 0;
  }
`

const CVTItemTitle = styled('div')`
  width: 100%;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
`

const CVTitledBox = props => (
  <CVBox color={props.color}>
    <CVTItemTitle>{props.title}</CVTItemTitle>
    <div>{props.description}</div>
  </CVBox>
)

CVTitledBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CVTitledBox
