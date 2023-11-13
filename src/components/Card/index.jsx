import styles from "./Card.module.css"

export function Card({ title, content, link, github }) {
	const colors = ["#E09AD6", "#A2D9E6", "#BE5E8E", "#9E6ECA"]

	return (
		<div className={styles.card}>
			<h1>{title}</h1>
			<p>{content}</p>
			<div className={styles.links}>
				<ul>
					<li>
						<a href={link} target="_blank">
							Go to the site
						</a>
					</li>

					<li> • </li>

					<li>
						<a href={github} target="_blank">
							Go to github repo
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
