import styles from './Projects.module.css'

import { Helmet } from 'react-helmet-async'

import { Session } from '../../components/Session'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { projects } from '../../data/projects'

export function Projects() {
  return (
    <>
      <Helmet>
        <title>Cassia Bernardo | Projects </title>
      </Helmet>
      <Layout>
        <Session title="Projects" id="projects">
          <div className={styles.cardsContainer}>
            {projects.map((proj, index) => (
              <Card
                key={index}
                color={proj.color}
                title={proj.title}
                content={proj.content}
                technologies={proj.technologies}
                link={proj.link}
                github={proj.github}
              />
            ))}
          </div>
        </Session>
      </Layout>
    </>
  )
}
