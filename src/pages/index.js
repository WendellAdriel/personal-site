import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/layout'
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
  text-align: center;

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

const ListLink = styled('a')`
  font-weight: 700;
  text-decoration: none;
  background-image: none;
`

export default () => (
  <Layout>
    <Section>
      <ImageWrapper>
        <ProfileImage src={profileImage} alt="Profile Image" />
      </ImageWrapper>

      <div>
        <CustomTitle>Hey there...</CustomTitle>

        <JustifiedText>
          I'm a <strong>Brazilian Software Engineer</strong> living in Portugal
          since 2016!
        </JustifiedText>

        <JustifiedText>
          I started to work with software development in <strong>2009</strong>{' '}
          as a<strong>Full Stack Developer</strong> and since then I worked with
          many technologies like HTML, CSS, JavaScript (Front-end and Back-end),
          PHP, Java, Go, SQL and NoSQL databases, Docker and much more. But my
          main stack is <strong>PHP and JavaScript</strong>.
        </JustifiedText>

        <h3>A little more about my work</h3>
        <ul>
          <li>
            I casually write articles on{' '}
            <ListLink
              href="https://medium.com/@wendell_adriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </ListLink>{' '}
            and/or on{' '}
            <ListLink
              href="https://dev.to/wendell_adriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              DEV.to
            </ListLink>
            , technical or not, in English or in Portuguese;
          </li>
          <li>
            I have a project called{' '}
            <ListLink
              href="https://codeshare.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeShare
            </ListLink>
            , to create free and high-quality content in Portuguese, to reach
            more people in Brazil that didn't have the opportunity to learn
            English yet. So when I write a post there I'll also publish it in
            English on{' '}
            <ListLink
              href="https://dev.to/wendell_adriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              DEV.to
            </ListLink>{' '}
            and{' '}
            <ListLink
              href="https://medium.com/@wendell_adriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </ListLink>
            ;
          </li>
          <li>
            I have some <strong>Open Source Projects</strong> that you can check
            on my{' '}
            <ListLink
              href="https://github.com/WendellAdriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </ListLink>
            ;
          </li>
          <li>
            I already led some talks and some workshops about software
            development, agile methodologies and career;
          </li>
          <li>
            I have already mentored several people who were starting out as
            software developers;
          </li>
        </ul>

        <h3>Some of my hobbies</h3>
        <ul>
          <li>
            I write lyrics for songs and also play the drums and bass guitar,
            but I'm not a pro;
          </li>
          <li>
            I like to create board/card games, I just do it for fun and to play
            with friends;
          </li>
          <li>
            I love to take pictures of nature, landscapes and little details on
            things that catch my attention
          </li>
          <li>
            I love to play tabletop games, especially RPGs and I'm a Dungeon
            Master since 2008;
          </li>
          <li>
            I really like to watch movies, series and animes (even better while
            eating some popcorn);
          </li>
        </ul>

        <JustifiedText>
          <strong>
            Do you want to know more about me and/or my work, say hi, talk about
            development, methodologies or any of the hobbies above? Get in touch
            using the icons on the footer! xD
          </strong>
        </JustifiedText>
      </div>
    </Section>
  </Layout>
)
