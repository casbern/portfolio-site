import styles from "./Card.module.css"

export function Card({ title, content, technologies, link, github, color }) {
	return (
		<div className={styles.card} style={{ backgroundColor: color }}>
			<h1>{title}</h1>
			<p>{content}</p>
			<p>{technologies}</p>
			<div className={styles.links}>
				<ul>
					<li>
						<a href={link} target="_blank">
							Site
						</a>
					</li>

					<li> • </li>

					<li>
						<a href={github} target="_blank">
							GitHub Repo
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
