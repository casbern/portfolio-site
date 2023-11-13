import { Header } from "./components/Header"
import { Session } from "./components/Session"
import { Card } from "./components/Card"

import image from "./assets/girl-coding.png"

import styles from "./App.module.css"
import "./global.css"

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<div className={styles.hero}>
					<img src={image} alt="Image of a girl coding" />

					<div className={styles.heroInfo}>
						<h1>Hello, nice to meet you here!</h1>
						<p>
							I am a passionate and ambitious web developer with a strong
							foundation in web programming and a keen eye for design and
							details. I am ready to contribute with my skills to create
							engaging and user-friendly web experiences.
						</p>

						<div className={styles.button}>
							<a href="#">See work</a>
						</div>
					</div>
				</div>

				<Session title="About me">
					<p>
						I kickstarted my career in the administrative field, picking up
						valuable insights and skills along the way. The turning point came
						during an exchange in Ireland, where I had my first taste of
						programming. This experience fueled my decision to steer my career
						in a new direction.
					</p>
					<br />
					<p>
						Determined to excel, I expanded my knowledge through various online
						courses. Additionally, I committed to academic growth, earning a
						degree in Analysis and Systems Development from Mackenzie
						University. This educational milestone has provided me with a solid
						foundation, laying the groundwork for a successful career in web
						programming.
					</p>

					<div className={styles.button}>
						<a
							href="https://www.linkedin.com/in/cassiabernardodev/"
							target="_blank"
						>
							Check my Linkedin!
						</a>
					</div>
				</Session>

				<Session title="Projects">
					<div className={styles.cardsContainer}>
						<Card
							color="var(--pink-100)"
							title="Food Explorer"
							content="This is a restaurant app using React, Express, Styled-components, SQLite, CSS, HTML, JavaScript."
							link="https://rocketseat-foodexplorer.netlify.app/"
							github="https://github.com/cah90/foodexplorer-frontend"
						/>

						<Card
							color="var(--blue-100)"
							title="Molehill Garden"
							content="This is a project using only HTML and CSS to exercise animation and keyframe."
							link="https://cah90.github.io/explorer-stage3-jardimToupeiras/"
							github="https://github.com/cah90/explorer-stage3-jardimToupeiras"
						/>

						<Card
							color="var(--pink-100)"
							title="Food Explorer"
							content="This is a restaurant app using React, Express, Styled-components, SQLite, CSS, HTML, JavaScript."
							link="https://rocketseat-foodexplorer.netlify.app/"
							github="https://github.com/cah90/foodexplorer-frontend"
						/>

						<Card
							color="var(--blue-100)"
							title="Molehill Garden"
							content="This is a project using only HTML and CSS to exercise animation and keyframe."
							link="https://cah90.github.io/explorer-stage3-jardimToupeiras/"
							github="https://github.com/cah90/explorer-stage3-jardimToupeiras"
						/>
					</div>
				</Session>
			</div>
		</>
	)
}

export default App
