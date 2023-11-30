import styles from "./Session.module.css"

export function Session({ title, children, id }) {
	return (
		<div className={styles.session} id={id}>
			<h2>{title}</h2>
			{children}
		</div>
	)
}
