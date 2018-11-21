import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/Layout'
import { CustomTitle, JustifiedText } from '../utils/base-visual-components'
import profileImage from '../images/profile.jpg'

const Section = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled('div')`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 30%;
  margin-right: 3rem;

  @media (max-width: 767px) {
    margin-right: 0;
  }
`

const ProfileImage = styled('img')`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 5px;
`

export default () => (
  <Layout>
    <Section>
      <ImageWrapper>
        <ProfileImage src={profileImage} alt="Profile Image"></ProfileImage>
      </ImageWrapper>

      <div>
        <CustomTitle>Hey there...</CustomTitle>
        
        <JustifiedText>
          I'm a <strong>Brazilian Software Engineer</strong>, but I'm living in Portugal since 2016!
        </JustifiedText>

        <JustifiedText>
          I'm an enthusiastic about new technologies/methodologies and I also love to share what I know with others.
          I started to work with software development in 2009 as a Full Stack Developer and since then I worked with
          many technologies like: HTML, CSS, JavaScript (Front-end and Back-end), PHP, Java, Go, SQL and NoSQL databases,
          Docker and much more, but my main stack is PHP and JS (Front-end and Back-end).
        </JustifiedText>

        <h3>A little more about my work</h3>
        <ul>
          <li>I casually write articles on Medium, technical or not, in english or in portuguese;</li>
          <li>I have some Open Source Projects that you can check on my Github Profile;</li>
          <li>I already led some talks and some workshops about software development;</li>
          <li>
            I like to participate in developer groups to talk about development, methodologies, etc.
            For this I use mainly Telegram, Slack and Facebook;
          </li>
        </ul>

        <h3>Some of my hobbies</h3>
        <ul>
          <li>I <strong>LOVE</strong> to play tabletop games, especially RPGs and I'm a Dungeon Master since 2008;</li>
          <li>I casually play the drums and bass guitar. I'm not good at it, I do it just for fun xD;</li>
          <li>I really like to watch movies or series with my wife (even better while eating some popcorn);</li>
          <li>I like to create board/card games, I just do it for fun and to play with friends;</li>
        </ul>
      </div>
    </Section>
  </Layout>
)
