import styles from './Skills.module.css'

import { Helmet } from 'react-helmet-async'

import { Layout } from '../../components/Layout'
import { Session } from '../../components/Session'

export function Skills() {
  return (
    <>
      <Helmet>
        <title>Cassia Bernardo | Skills </title>
      </Helmet>
      <Layout>
        <Session title="Skills" id="skills">
          <p>
            Over the course of my learning and projects, I have developed a
            well-rounded skill set spanning front-end frameworks, back-end
            tools, databases, and essential development utilities. Here are the
            tools and technologies I work with to bring ideas to life.
          </p>

          <div className={styles.iconsContainer}>
            <div className={styles.icons}>
              <h4>FrontEnd</h4>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                title="HTML5"
                alt="Logo HTML5"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                title="CSS3"
                alt="Logo CSS3"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
                title="Tailwind CSS"
                alt="Logo Tailwind CSS"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="JavaScript"
                alt="Logo JavaScript"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                title="React"
                alt="Logo React"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                title="Next.js"
                alt="Logo Next.js"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
                title="TypeScript"
                alt="Logo TypeScript"
              />
            </div>

            <div className={styles.icons}>
              <h4>BackEnd</h4>

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                title="Node.js"
                alt="Logo Node.js"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                title="Express.js"
                alt="Logo Express.js"
              />
            </div>

            <div className={styles.icons}>
              <h4>Database</h4>

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
                title="SQLite"
                alt="Logo SQLite"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                title="PostgreSQL"
                alt="Logo PostgreSQL"
              />
            </div>

            <div className={styles.icons}>
              <h4>Editor</h4>

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                title="VSCode"
                alt="Logo VSCode"
              />
            </div>

            <div className={styles.icons}>
              <h4>Other Tools</h4>

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                title="Git"
                alt="Logo Git"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                title="Github"
                alt="Logo Github"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
                title="Docker"
                alt="Logo Docker"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-line-wordmark.svg"
                title="Yarn"
                alt="Logo Yarn"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original-wordmark.svg"
                title="pnpm"
                alt="Logo pnpm"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                title="npm"
                alt="Logo npm"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                title="Figma"
                alt="Logo Figma"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-plain-wordmark.svg"
                title="Insomnia"
                alt="Logo Insomnia"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain-wordmark.svg"
                title="Postman"
                alt="Logo Postman"
              />
            </div>
          </div>
        </Session>
      </Layout>
    </>
  )
}
