import styles from "./Projects.module.css"

import { Session } from "../../components/Session"
import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"

export function Projects() {
	return (
		<>
			<Layout>
				<Session title="Projects" id="projects">
					<div className={styles.cardsContainer}>
						<Card
							color="var(--pink-200)"
							title="Food Explorer"
							content="This is a restaurant app using React, Express, Styled-components, SQLite, CSS, HTML, JavaScript."
							link="https://rocketseat-foodexplorer.netlify.app/"
							github="https://github.com/cah90/foodexplorer-frontend"
						/>

						<Card
							color="var(--blue-200)"
							title="Molehill Garden"
							content="This is a project using only HTML and CSS to exercise animation and keyframe."
							link="https://cah90.github.io/explorer-stage3-jardimToupeiras/"
							github="https://github.com/cah90/explorer-stage3-jardimToupeiras"
						/>

						<Card
							color="var(--lilac)"
							title="Food Explorer"
							content="This is a restaurant app using React, Express, Styled-components, SQLite, CSS, HTML, JavaScript."
							link="https://rocketseat-foodexplorer.netlify.app/"
							github="https://github.com/cah90/foodexplorer-frontend"
						/>

						<Card
							color="var(--pink-200)"
							title="Molehill Garden"
							content="This is a project using only HTML and CSS to exercise animation and keyframe."
							link="https://cah90.github.io/explorer-stage3-jardimToupeiras/"
							github="https://github.com/cah90/explorer-stage3-jardimToupeiras"
						/>
					</div>
				</Session>
			</Layout>
		</>
	)
}
