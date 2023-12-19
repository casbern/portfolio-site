import styles from "./Contact.module.css"

import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { useForm, ValidationError } from "@formspree/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Session } from "../../components/Session"
import { Layout } from "../../components/Layout"

export function Contact() {
	const [state, handleSubmitForm] = useForm("xayrwjqz")

	const handleSubmit = async (e) => {
		e.preventDefault()
		await handleSubmitForm(e)

		console.log(state)

		if (state.succeeded) {
			toast.success("Message sent successfully!", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 5000,
				hideProgressBar: false,
			})
		} else if (state.errors) {
			toast.error("Failed to send message. Please try again later.", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 5000,
				hideProgressBar: false,
			})
		}
	}

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

						<form className={styles.form} onSubmit={handleSubmit}>
							<div className={styles.formInfo}>
								<label>Name</label>
								<input
									id="name"
									name="name"
									type="text"
									placeholder="John Doe"
									required
								/>

								<label>Email</label>
								<input
									id="email"
									type="email"
									name="email"
									placeholder="example@gmail.com"
									required
								/>
							</div>

							<label>Message</label>
							<textarea
								id="message"
								name="message"
								placeholder="Enter your message here"
								required
							></textarea>

							<button type="submit" disabled={state.submitting}>
								Send
							</button>
						</form>
					</div>
				</Session>
			</Layout>
		</>
	)
}
