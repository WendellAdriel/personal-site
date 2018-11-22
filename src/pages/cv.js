import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/Layout'
import CVTitledBox from '../components/CVTitledBox'
import CVItemBox from '../components/CVItemBox'
import data from '../utils/cv-data'

const CVTitle = styled('h2')`
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px dashed #000;
  text-align: center;
`

const CVSection = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export default () => (
  <Layout>
    <CVTitle>Education Background</CVTitle>
    <CVSection>
      {data.education.map(item => (
        <CVTitledBox
          color="#ca5b43"
          title={item.title}
          description={item.description}
        />
      ))}
    </CVSection>

    <CVTitle>Languages</CVTitle>
    <CVSection>
      {data.languages.map(language => (
        <CVTitledBox
          color="#407899"
          title={language.title}
          description={language.description}
        />
      ))}
    </CVSection>

    <CVTitle>Certifications</CVTitle>
    <CVSection>
      {data.certifications.map(cert => (
        <CVTitledBox
          color="#f49f0a"
          title={cert.title}
          description={cert.description}
        />
      ))}
    </CVSection>

    <CVTitle>Skills</CVTitle>
    <CVSection>
      {data.skills.map(skill => (
        <CVItemBox color="#1ca086" description={skill} />
      ))}
    </CVSection>

    <CVTitle>Professional Experience</CVTitle>
    <CVSection>
      {data.professional.map(item => (
        <CVTitledBox
          color="#26547c"
          title={item.title}
          description={item.description}
        />
      ))}
    </CVSection>

    <CVTitle>Volunteer Experience</CVTitle>
    <CVSection>
      {data.volunteer.map(item => (
        <CVTitledBox
          color="#8b7638"
          title={item.title}
          description={item.description}
        />
      ))}
    </CVSection>
  </Layout>
)
