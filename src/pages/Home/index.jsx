import { TypeAnimation } from 'react-type-animation'

import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'

// import image from '../../assets/girl-coding.png'
import cv from '../../assets/cv.pdf'

import styles from './Home.module.css'
import '../../global.css'

export function Home() {
  const Highlight = ({ children }) => (
    <strong className={styles.highlight}>{children}</strong>
  )
  return (
    <>
      <Layout>
        <div className={styles.hero}>
          <img src="girl-coding.png" alt="Image of a girl coding" />

          <div className={styles.heroInfo}>
            {/* <h1>Hello, nice to meet you here!</h1> */}
            <TypeAnimation
              sequence={[
                '<Hello /> ',
                2000,
                'Nice to see you here! ',
                2000,
                () => {
                  console.log('Sequence completed')
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
            <p>
              <Highlight>Full Stack Developer</Highlight> skilled in building
              modern web applications with <Highlight>React, Next.js</Highlight>
              , and <Highlight>TypeScript</Highlight> on the frontend, and{' '}
              <Highlight>Node.js, Express</Highlight>, and{' '}
              <Highlight>PostgreSQL</Highlight> on the backend.
              <br /> I focus on creating scalable, user-centered solutions with
              clean code and attention to both performance and user experience.
            </p>

            <div className={styles.buttons}>
              <Button to="/projects">Projects</Button>

              <Button
                to="https://www.linkedin.com/in/cassiabernardodev/"
                target="_blank"
              >
                LinkedIn
              </Button>

              <Button
                to={cv}
                // download="cv"
                target="_blank"
                type="application/pdf"
                rel="noopener noreferrer"
              >
                CV
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
