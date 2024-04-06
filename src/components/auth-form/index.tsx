import React from "react"
import styles from "./index.module.scss"
import { Link } from "react-router-dom"

type Props = {
  children: React.ReactNode
  onSubmit: any
}

export const AuthForm: React.FC<Props> = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }
  return (
    <form onSubmit={handleSubmit} className={styles.authForm} {...props}>
      {children}
    </form>
  )
}
