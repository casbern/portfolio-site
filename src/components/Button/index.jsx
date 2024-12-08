import styles from './Button.module.css'

import { Link } from 'react-router-dom'

export function Button({ children, ...props }) {
  return (
    <Link
      to={props.to}
      target={props.target}
      type={props.type}
      rel={props.rel}
      disabled={props.disabled}
      className={styles.button}
    >
      {children}
    </Link>
  )
}
