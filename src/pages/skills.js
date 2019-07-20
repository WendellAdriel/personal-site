import React from 'react'
import { faObjectGroup } from '@fortawesome/free-regular-svg-icons'
import {
  faCode,
  faDesktop,
  faMobileAlt,
  faDatabase,
  faCogs,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SkillItem from '../components/SkillItem'
import { colors } from '../utils/base-visual-components'

export default () => (
  <Layout>
    <SkillItem
      skill="Architecture"
      bg={colors.architecture}
      icon={faObjectGroup}
    >
      Experience with defining, creating, maintaining and changing the
      architecture of large scale and/or large codebase apps. Experience with
      working with different types of architectures:
      <strong>
        {' '}
        SOA (SOAP and REST services), MVC, DDD and Microservices
      </strong>{' '}
      are the ones that I have more experience with. I'm always studying about{' '}
      <strong>
        Design Patterns, Best Practices and Software Architecture
      </strong>{' '}
      to have the necessary knowledge to apply on the projects that I work on.
    </SkillItem>

    <SkillItem skill="Back-end" bg={colors.back} icon={faCode}>
      I work with Back-end development since 2009. I have a lot of experience
      working with complex, large scale and large codebase apps. Always using
      the Best Practices to create high quality code, I try to build the
      simplest solutions that I can to solve the problems. Security and
      performance are some critical points that I always pay attention to when
      developing a solution. I already worked with many languages, but the ones
      that I have more experience with are:{' '}
      <strong>PHP, JavaScript (Node.js), Go and Java.</strong>
    </SkillItem>

    <SkillItem skill="Front-end" bg={colors.front} icon={faDesktop}>
      I work with Front-end development since 2009. I have a lot of experience
      working with complex, large scale and large codebase apps. Always using
      the Best Practices to create high quality code, I try to build the
      simplest solutions to create a great UI and UX, where the user can enjoy
      to use the app because of its{' '}
      <strong>look and feel and simplicity.</strong> My focus on the Front-end
      is the
      <strong> JavaScript</strong> part. Using{' '}
      <strong>
        VanillaJS or Frameworks like Vue.js, React, Angular (the ones that I
        have more experience with) or any other Framework
      </strong>{' '}
      and tools like <strong>NPM/Yarn, Task Runners and Bundlers. </strong>I
      also have experience creating{' '}
      <strong>semantic and accessible HTML</strong> and creating stylesheets
      using <strong>CSS, SASS and Stylus </strong>
      following architectures like:{' '}
      <strong>BEMCSS, RSCSS and Atomic Design.</strong>
    </SkillItem>

    <SkillItem skill="Mobile" bg={colors.mobile} icon={faMobileAlt}>
      I work with Mobile Development since 2015. I have experience building{' '}
      <strong>Hybrid and Native apps using JavaScript.</strong> I already worked
      in some projects with{' '}
      <strong>Apache Cordova, Ionic, NativeScript and React Native</strong>, but
      mostly in POCs, MVPs and study projects. I have only one experience with a
      complex, large scale and large codebase app that's a{' '}
      <strong>Mobile Banking</strong> solution.
    </SkillItem>

    <SkillItem skill="Databases" bg={colors.db} icon={faDatabase}>
      I work with databases since 2009. I have a lot of experience working with{' '}
      <strong>huge amount of data and complex queries.</strong> I have
      experience working with SQL databases:{' '}
      <strong>MySQL, MariaDB, PostgreSQL and Oracle</strong> and NoSQL databases
      like: <strong>DynamoDB, MongoDB, PouchDB, CouchDB and Redis.</strong>
    </SkillItem>

    <SkillItem skill="DevOps" bg={colors.devops} icon={faCogs}>
      I have a lot of experience working with Code Versioning tools, specially{' '}
      <strong>Git.</strong> I know how to work with different workflows like
      <strong> Gitflow, Forking Workflow, etc.</strong> I also have experience
      defining, creating, maintaining and changing{' '}
      <strong>simple infrastructures and CI/CD pipelines.</strong> I also have
      experience working with tools like <strong>Docker, Jenkins, etc.</strong>
    </SkillItem>

    <SkillItem
      skill="Methodologies"
      bg={colors.methodologies}
      icon={faChartLine}
    >
      I love <strong>Agile Methodologies</strong> and I'm always reading
      something about it. I have a lot of experience with these methodologies,
      specially
      <strong> Scrum and Kanban.</strong> I've been using these methodologies a
      lot in the past years and I have experience working as a{' '}
      <strong>Scrum Master. </strong>I already gave a few consultancies for
      small companies and startups about Agile Methodologies, Scrum and Kanban,
      helping them to learn about these topics and helping to create Agile
      Teams.
    </SkillItem>
  </Layout>
)
