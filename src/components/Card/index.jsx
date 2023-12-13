import styles from "./Card.module.css"

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
				<button>
					<a href={link} target="_blank">
						Site
					</a>
				</button>

				<button>
					<a href={github} target="_blank">
						GitHub Repo
					</a>
				</button>
			</div>
		</div>
	)
}
