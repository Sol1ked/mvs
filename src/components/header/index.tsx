import { Link } from "react-router-dom"
import styles from "./index.module.scss"
import logo from "../../assets/images/logo.svg"
import { useState } from "react"
import { Menu } from "../menu"
import { Button } from "../button"
import { Search } from "../search"

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={styles.right}>
        <Search />
        <Button>Войти</Button>
      </div>
    </div>
  )
}
