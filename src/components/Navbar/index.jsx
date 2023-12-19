import styles from "./Navbar.module.css"
import { useState, useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

import { Link, useLocation } from "react-router-dom"

export function Navbar() {
	const location = useLocation()
	const [currentPage, setCurrentPage] = useState("")
	const [isNavExpanded, setIsNavExpanded] = useState(false)

	useEffect(() => {
		setCurrentPage(location.pathname)
	}, [location])

	const links = [
		{ to: "/about", text: "About" },
		{ to: "/skills", text: "Skills" },
		{ to: "/projects", text: "Projects" },
		{ to: "/contact", text: "Contact" },
	]

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
					{links.map((link) => (
						<li key={link.to}>
							<Link
								to={link.to}
								className={currentPage === link.to ? `${styles.active}` : ""}
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
