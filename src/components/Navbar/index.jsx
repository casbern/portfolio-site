import styles from "./Navbar.module.css"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

export function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false)
	return (
		<nav className={styles.navigation}>
			<a className={styles.brandName} href="/">
				<strong>Cássia Bernardo</strong>
			</a>
			<button
				className={styles.burguerIcon}
				onClick={() => setIsNavExpanded(!isNavExpanded)}
			>
				<RxHamburgerMenu size={24} />
			</button>

			<div
				className={`${styles.navigationMenu} ${
					isNavExpanded ? styles.expanded : ""
				}`}
			>
				<ul>
					<li>
						<a href="#work">WORK</a>
					</li>
					<li>
						<a href="#about">ABOUT</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
