import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { colors, JustifiedText } from '../utils/base-visual-components'

const SkillSection = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${props => props.bg};
  color: ${colors.white};
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const SkillIcon = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 10%;
  justify-content: center;
  align-items: center;
  font-size: 4.5rem;
  padding-right: 1rem;
  border-right: 1px solid ${colors.white};

  @media (max-width: 767px) {
    font-size: 3rem;
    padding-right: 0;
    padding-bottom: 1rem;
    border-right: none;
    border-bottom: 1px solid ${colors.white};
  }
`

const SkillName = styled('h3')`
  margin-top: 0;
  color: ${colors.white};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.white};

  @media (max-width: 767px) {
    text-align: center;
    padding-top: 0.5rem;
    border-bottom: none;
  }
`

const SkillDescription = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-left: 1rem;
`

const SkillItem = props => (
  <SkillSection bg={props.bg}>
    <SkillIcon>
      <FontAwesomeIcon icon={props.icon} />
    </SkillIcon>
    <SkillDescription>
      <SkillName>{props.skill}</SkillName>
      <JustifiedText>{props.children}</JustifiedText>
    </SkillDescription>
  </SkillSection>
)

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default SkillItem
