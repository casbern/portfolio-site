import styles from "./About.module.css"

import { Session } from "../../components/Session"
import { Layout } from "../../components/Layout"

export function About() {
	return (
		<>
			<Layout>
				<Session title="About me" id="about">
					<p>
						I kickstarted my career in the administrative field, picking up
						valuable insights and skills along the way. The turning point came
						during an exchange in Ireland, where I had my first taste of
						programming. This experience fueled my decision to steer my career
						in a new direction.
					</p>
					<br />
					<p>
						Determined to excel, I expanded my knowledge through various online
						courses. Additionally, I committed to academic growth, earning a
						degree in <strong>Analysis and Systems Development</strong> from
						Mackenzie University. This educational milestone has provided me
						with a solid foundation, laying the groundwork for a successful
						career in <strong>web programming</strong>.
					</p>

					<div className={styles.button}>
						<a
							href="https://www.linkedin.com/in/cassiabernardodev/"
							target="_blank"
						>
							Check my LinkedIn
						</a>
					</div>
				</Session>
			</Layout>
		</>
	)
}
