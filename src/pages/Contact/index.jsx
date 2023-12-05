import styles from "./Contact.module.css"

import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

import { Session } from "../../components/Session"
import { Layout } from "../../components/Layout"

export function Contact() {
	return (
		<>
			<Layout>
				<Session title="Enjoyed my work?" id="contact">
					<div className={styles.contact}>
						<div className={styles.contactInfo}>
							<p>Let's work together!</p>
							<p>
								I am always up for a chat. Send me a message or give me a shout
								on my social media.
							</p>

							<div className={styles.links}>
								<a
									href="https://www.linkedin.com/in/cassiabernardodev/"
									target="_blank"
								>
									<FaLinkedin />
								</a>

								<a href="https://www.github.com/cah90" target="_blank">
									<FaGithubSquare />
								</a>
							</div>
						</div>

						<form className={styles.form} action="#">
							<div className={styles.formInfo}>
								<label>Name</label>
								<input type="text" placeholder="John Doe" />

								<label>Email</label>
								<input type="email" placeholder="example@gmail.com" />
							</div>

							<label>Message</label>
							<textarea placeholder="Enter your message here"></textarea>

							<button type="submit">Send</button>
						</form>
					</div>
				</Session>
			</Layout>
		</>
	)
}
