import styles from "./Header.module.css"
import { List } from "@phosphor-icons/react"

export function Header() {
	return (
		<>
			<header className={styles.header}>
				<strong>Cássia Bernardo</strong>
				<List size={24} />

				<nav>
					<ul>
						<li>
							<a href="#work">Work</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
