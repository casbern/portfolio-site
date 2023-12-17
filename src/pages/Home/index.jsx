import { TypeAnimation } from "react-type-animation"
import { Link } from "react-router-dom"

import { Layout } from "../../components/Layout"

import image from "../../assets/girl-coding.png"
import cv from "../../assets/cv.pdf"

import styles from "./Home.module.css"
import "../../global.css"

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
								"<Hello /> ",
								2000,
								"Nice to see you here! ",
								2000,
								() => {
									console.log("Sequence completed")
								},
							]}
							wrapper="span"
							cursor={true}
							repeat={Infinity}
						/>
						<p>
							Junior Front-End Developer passionate about turning ideas into
							engaging and responsive interfaces, with solid skills in{" "}
							<strong>React, HTML, CSS </strong>, and{" "}
							<strong>JavaScript</strong>.
						</p>

						<div className={styles.buttons}>
							<div className={styles.button}>
								<Link to="/projects">Projects</Link>
							</div>

							<div className={styles.button}>
								<Link
									to="https://www.linkedin.com/in/cassiabernardodev/"
									target="_blank"
								>
									LinkedIn
								</Link>
							</div>

							<div className={styles.button}>
								<Link
									to={cv}
									download="cv"
									target="_blank"
									rel="noopener noreferrer"
								>
									CV
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
