import styles from "./Navbar.module.css"
import { useState, useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

import { Link } from "react-router-dom"

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
						<Link to="/projects">PROJECTS</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
