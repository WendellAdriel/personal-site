import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const CVBox = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 20%;
  justify-content: center;
  align-items: center;
  border: ${props => `5px dashed ${props.color}`};
  border-radius: 5px;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${props => props.color};
    border: ${props => `5px solid ${props.color}`};
    color: #fff;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    flex: 0 0 100%;
    width: 100%;
  }
`

const CVItemDescription = styled('div')`
  width: 100%;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
`

const CVItemBox = props => (
  <CVBox color={props.color}>
    <CVItemDescription>{props.description}</CVItemDescription>
  </CVBox>
)

CVItemBox.propTypes = {
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CVItemBox
