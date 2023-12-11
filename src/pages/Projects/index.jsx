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
							content="A restaurant web app that accepts food delivery orders, lists the dishes and has an admin area to manage the dishes."
							technologies="React • Express • Styled-components • SQLite • CSS • HTML • JavaScript."
							link="https://rocketseat-foodexplorer.netlify.app/"
							github="https://github.com/cah90/foodexplorer-frontend"
						/>

						<Card
							color="var(--lilac)"
							title="Focus Timer"
							content="A fully responsive web app allowing time manipulation, music playback, and seamless light/dark mode toggling for optimal user experience across devices."
							technologies="HTML • CSS • JavaScript."
							link="https://timertofocus.netlify.app/"
							github="https://github.com/cah90/focus-timer-dark-mode"
						/>

						<Card
							color="var(--blue-200)"
							title="Reta Final"
							content="A web application built as a final university project for a company that manages tournaments between soccer schools."
							technologies="HTML • CSS • JavaScript • Node.js • Nunjucks • Express • PostgreSQL."
							link="https://reta-final.onrender.com/campeonatos"
							github="https://github.com/cah90/reta-final"
						/>

						<Card
							color="var(--lilac)"
							title="Rocket Notes"
							content="A web app for storing personal notes. It's possible to edit and delete notes as needed, as well as edit your profile and photo."
							technologies="React • Express • Styled-components • SQLite • CSS • HTML • JavaScript."
							link="https://keepthenotes.netlify.app/"
							github="https://github.com/cah90/explorer-rocketnotes-frontend"
						/>

						<Card
							color="var(--pink-200)"
							title="Lucky Cookie"
							content="A web app that emulates a virtual Chinese fortune cookie experience, delivering wise life tips."
							technologies="HTML • CSS • JavaScript."
							link="https://luckycookie.netlify.app/"
							github="https://github.com/cah90/biscoito-da-sorte"
						/>
					</div>
				</Session>
			</Layout>
		</>
	)
}
