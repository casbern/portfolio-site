import { Layout } from "../../components/Layout"

import { Link } from "react-router-dom"

import image from "../../assets/girl-coding.png"

import styles from "./Home.module.css"
import "../../global.css"

export function Home() {
	return (
		<>
			<Layout>
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
							<Link to="/projects">See my work</Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
