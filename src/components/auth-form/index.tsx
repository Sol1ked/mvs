import React from "react"
import styles from "./index.module.scss"
import { Link } from "react-router-dom"

type Props = {
  children: React.ReactNode
}

export const AuthForm: React.FC<Props> = ({ children }) => {
  return <form className={styles.authForm}>{children}</form>
}
