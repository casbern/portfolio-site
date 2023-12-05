import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "../src/pages/Home"
import { About } from "../src/pages/About"
import { Contact } from "../src/pages/Contact"
import { Projects } from "../src/pages/Projects"

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	)
}
