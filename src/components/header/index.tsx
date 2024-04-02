import { Link } from "react-router-dom"
import styles from "./index.module.scss"
import logo from "../../assets/images/logo.svg"
import { useState } from "react"
import { Menu } from "../menu"
import { Button } from "../button"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Menu />
      <div className={styles.avatar}>
        <Button typeButton={"full"}>
          <Link to="/auth">Войти</Link>
        </Button>
      </div>
    </div>
  )
}
