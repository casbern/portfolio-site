import { TypeAnimation } from 'react-type-animation'

import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'

import image from '../../assets/girl-coding.png'
import cv from '../../assets/cv.pdf'

import styles from './Home.module.css'
import '../../global.css'

export function Home() {
  return (
    <>
      <Layout>
        <div className={styles.hero}>
          <img src={image} alt="Image of a girl coding" />

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
              Junior Web Developer with a passion for transforming ideas into
              engaging, responsive interfaces.
              <br />
              Skilled in <strong>React</strong>, <strong>HTML</strong>,{' '}
              <strong>CSS</strong>, and <strong>JavaScript</strong>, with
              experience in additional tools and technologies to create seamless
              user experiences.
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
