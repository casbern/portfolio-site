import styles from './About.module.css'

import { Session } from '../../components/Session'
import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'

export function About() {
  return (
    <>
      <Layout>
        <Session title="About me" id="about">
          <p>
            I began my career in the administrative field, where I gained
            valuable skills and insights that continue to support my growth. My
            journey took a transformative turn during an exchange program in
            Ireland, where I discovered a passion for programming and set off on
            a new career path. Driven by a desire to excel in this field, I
            built a strong foundation through extensive online{' '}
            <strong>courses</strong> and <strong>formal education</strong>,
            ultimately earning a degree in{' '}
            <strong>Analysis and Systems Development</strong> from Mackenzie
            University. This academic background, coupled with a commitment to
            <strong>continuous learning</strong> and embracing{' '}
            <strong>new challenges</strong>, has equipped me with the{' '}
            <strong>technical skills</strong> and <strong>adaptability</strong>{' '}
            essential for a thriving career in web development.
          </p>

          <div className={styles.button}>
            <Button
              href="https://www.linkedin.com/in/cassiabernardodev/"
              target="_blank"
              rel="noreferrer"
            >
              Check my LinkedIn
            </Button>
          </div>
        </Session>
      </Layout>
    </>
  )
}
