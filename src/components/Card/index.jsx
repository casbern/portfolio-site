import styles from './Card.module.css'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

export function Card({
  title,
  image,
  imageText,
  content,
  technologies,
  link,
  github,
  color,
}) {
  return (
    <motion.div
      className={styles.card}
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src={image} alt={imageText} />
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{technologies}</p>
      <div className={styles.links}>
        <Link to={link} target="_blank" className={styles.button}>
          Site
        </Link>

        <Link to={github} target="_blank" className={styles.button}>
          GitHub Repo
        </Link>
      </div>
    </motion.div>
  )
}
