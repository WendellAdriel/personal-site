import React from 'react'
import styled, { css } from 'react-emotion'

import Layout from '../components/Layout'
import profileImage from '../images/profile.jpg'

const Section = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const ProfileImage = styled('img')`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 5px;
`

const justifiedText = css`text-align: justify;`

export default () => (
  <Layout>
    <Section>
      <div className={css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 30%;
        margin-right: 3rem;

        @media (max-width: 767px) {
          margin-top: 2rem;
          margint-right: 0;
        }
      `}>
        <ProfileImage src={profileImage} alt="Profile Image"></ProfileImage>
      </div>

      <div>
        <h3 className={css`margin-top: 0;`}>Hey there...</h3>
        
        <p className={justifiedText}>
          I'm a <strong>Brazilian Software Engineer</strong>, but I'm living in Portugal since 2016!
        </p>

        <p className={justifiedText}>
          I'm an enthusiastic about new technologies/methodologies and I also love to share what I know with others.
          I started to work with software development in 2009 as a Full Stack Developer and since then I worked with
          many technologies like: HTML, CSS, JavaScript (Front-end and Back-end), PHP, Java, Go, SQL and NoSQL databases,
          Docker and much more, but my main stack is PHP and JS (Front-end and Back-end).
        </p>
      </div>
    </Section>
  </Layout>
)
