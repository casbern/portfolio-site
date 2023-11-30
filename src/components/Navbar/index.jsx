import styles from "./Navbar.module.css"
import { useState, useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

export function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024 && isNavExpanded) {
				setIsNavExpanded(!isNavExpanded)
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [isNavExpanded])

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
						<a href="#work" onClick={() => setIsNavExpanded(!isNavExpanded)}>
							WORK
						</a>
					</li>
					<li>
						<a href="#about" onClick={() => setIsNavExpanded(!isNavExpanded)}>
							ABOUT
						</a>
					</li>
					<li>
						<a href="#contact" onClick={() => setIsNavExpanded(!isNavExpanded)}>
							CONTACT
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
