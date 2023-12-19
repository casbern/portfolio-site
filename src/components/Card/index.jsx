import styles from "./Card.module.css"

import { Link } from "react-router-dom"

export function Card({
	title,
	image,
	imageText,
	content,
	technologies,
	link,
	github,
	color,
}) {
	return (
		<div className={styles.card} style={{ backgroundColor: color }}>
			<img src={image} alt={imageText} />
			<h1>{title}</h1>
			<p>{content}</p>
			<p>{technologies}</p>
			<div className={styles.links}>
				<Link to={link} target="_blank" className={styles.button}>
					Site
				</Link>

				<Link to={github} target="_blank" className={styles.button}>
					GitHub Repo
				</Link>
			</div>
		</div>
	)
}
