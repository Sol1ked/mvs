import React from "react"
import styles from "./index.module.scss"
import { Link } from "react-router-dom"

type Props = {
  title: string
}

export const AuthForm: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.authForm}>
      <h2>{title}</h2>
    </div>
  )
}
