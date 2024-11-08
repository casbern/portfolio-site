import styles from './Projects.module.css'

import { Session } from '../../components/Session'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'

export function Projects() {
  return (
    <>
      <Layout>
        <Session title="Projects" id="projects">
          <div className={styles.cardsContainer}>
						<Card
              color="var(--blue-200)"
              title="Sunnyside Agency Landing Page"
              content="A fully responsive landing page for a marketing agency, emphasizing semantic HTML5, CSS Flexbox, CSS Grid, JavaScript, and a mobile-first approach."
              technologies="HTML • CSS • JavaScript."
              link="https://sunnyside-agency-landpage.netlify.app/"
              github="https://github.com/casbern/sunnyside-agency"
            />

						<Card
              color="var(--lilac)"
              title="Timer with History"
              content="A different countdown for controlling your tasks. Here you can give a name to your task and check it on the history tab for your own control."
              technologies="React • Styled-Component • JavaScript • TypeScript • HTML"
              link="https://ignit-timer.netlify.app/"
              github="https://github.com/casbern/timer"
            />

						<Card
              color="var(--pink-200)"
              title="Coffee Delivery Store"
              content="A delivery coffee store in which the client can place an order, choose the delivery and the payment method."
              technologies="React • Styled-Component • JavaScript • TypeScript • HTML • CSS • Radix"
              link="https://coffeedelivery.netlify.app/"
              github="https://github.com/casbern/coffee-delivery"
            />

						<Card
              color="var(--lilac)"
              title="Github Blog Issues"
              content="A very nice application that shows all the issues related to a repo. We can use the search to look faster to an specific issue and click on it for more details."
              technologies="React • Styled-Component • JavaScript • TypeScript • HTML • CSS"
              link="https://gitbloghub.netlify.app/"
              github="https://github.com/casbern/github-blog"
            />

            <Card
              color="var(--pink-200)"
              title="Food Explorer"
              content="
							A restaurant web app that accepts food delivery orders, 
							lists the dishes and has an admin area to manage the dishes.
							To test the app, it's necessary to create an account.
							"
              technologies="React • Express • Styled-components • SQLite • CSS • HTML • JavaScript."
              link="https://rocketseat-foodexplorer.netlify.app/"
              github="https://github.com/casbern/foodexplorer-frontend"
            />

            <Card
              color="var(--blue-200)"
              title="Focus Timer"
              content="A fully responsive web app allowing time manipulation, music playback, and seamless light/dark mode toggling for optimal user experience across devices."
              technologies="HTML • CSS • JavaScript."
              link="https://timertofocus.netlify.app/"
              github="https://github.com/casbern/focus-timer-dark-mode"
            />

            <Card
              color="var(--blue-200)"
              title="Todo App"
              content="A to-do app that marks all your tasks for the day and includes a counter that tracks how many tasks have been completed and how many are still open to finish."
              technologies="HTML • CSS • JavaScript • React • Typescript."
              link="https://todo-tasks-project.netlify.app/"
              github="https://github.com/casbern/todo"
            />

            <Card
              color="var(--lilac)"
              title="Rocket Notes"
              content="
							A web app for storing personal notes. 
							It's possible to edit and delete notes as needed, as well as edit your profile and photo.
							To test the app, it's necessary to create an account.
							"
              technologies="React • Express • Styled-components • SQLite • CSS • HTML • JavaScript."
              link="https://keepthenotes.netlify.app/"
              github="https://github.com/casbern/explorer-rocketnotes-frontend"
            />

            <Card
              color="var(--pink-200)"
              title="Lucky Cookie"
              content="A super fun responsive web app that emulates a virtual Chinese fortune cookie experience, delivering wise life tips. Try it out!"
              technologies="HTML • CSS • JavaScript."
              link="https://luckycookie.netlify.app/"
              github="https://github.com/casbern/biscoito-da-sorte"
            />

            <Card
              color="var(--pink-200)"
              title="Four Cards Layout"
              content="A fully responsive card layout focusing on semantic HTML5 markup, CSS Grid, CSS Grid Area, and a mobile-first approach."
              technologies="HTML • CSS."
              link="https://cards-layout.netlify.app/"
              github="https://github.com/casbern/four-card-feature-seaction-master"
            />

            <Card
              color="var(--blue-200)"
              title="Pricing Component with Toggle"
              content="A fully responsive pricing component that toggles between monthly and annual prices, emphasizing semantic HTML5, CSS Flexbox, JavaScript, and a mobile-first approach."
              technologies="HTML • CSS • JavaScript."
              link="https://pricing-toggle-layout.netlify.app/"
              github="https://github.com/casbern/pricing-component-with-toggle-master"
            />

            
            <Card
              color="var(--lilac)"
              title="Sign Up Form with JavaScript Validation"
              content="This project utilized HTML, CSS, and JavaScript, following a mobile-first approach."
              technologies="HTML • CSS • JavaScript."
              link="https://sign-up-form-js-validation.netlify.app/"
              github="https://github.com/casbern/sign-up-form"
            />

            <Card
              color="var(--lilac)"
              title="3 Column Card Component"
              content="A three card component layout that used semantic HTML, CSS Flexbox and a mobile-first workflow."
              technologies="HTML • CSS."
              link="https://three-column-card-component-layout.netlify.app/"
              github="https://github.com/casbern/3-column-preview-card-component-main"
            />

						{/* <Card
              color="var(--lilac)"
              title="Reta Final"
              content="A web application built as a final university project for a company that manages tournaments between soccer schools."
              technologies="HTML • CSS • JavaScript • Node.js • Nunjucks • Express • PostgreSQL."
              link="https://reta-final.onrender.com/campeonatos"
              github="https://github.com/casbern/reta-final"
            /> */}
          </div>
        </Session>
      </Layout>
    </>
  )
}
