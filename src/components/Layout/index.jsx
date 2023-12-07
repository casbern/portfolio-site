import styles from "./Layout.module.css"

import { Header } from "../Header"
import { Footer } from "../Footer"

export function Layout({ children }) {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>{children}</div>

			<Footer />
		</>
	)
}
