import styles from "./Session.module.css"

export function Session({ title, children }) {
	return (
		<div className={styles.session}>
			<h2>{title}</h2>
			{children}
		</div>
	)
}
