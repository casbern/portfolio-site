import styles from "./Skills.module.css"

import { Layout } from "../../components/Layout"
import { Session } from "../../components/Session"

export function Skills() {
	return (
		<>
			<Layout>
				<Session title="Skills" id="skills">
					<div className={styles.iconsContainer}>
						<div className={styles.icons}>
							<h4>FrontEnd</h4>
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
						</div>

						<div className={styles.icons}>
							<h4>BackEnd</h4>

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
						</div>

						<div className={styles.icons}>
							<h4>Database</h4>

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
						</div>

						<div className={styles.icons}>
							<h4>Editor</h4>

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
						</div>

						<div className={styles.icons}>
							<h4>Other Tools</h4>

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
						</div>
					</div>
				</Session>
			</Layout>
		</>
	)
}
