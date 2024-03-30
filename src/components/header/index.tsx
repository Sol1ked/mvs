import { Link } from "react-router-dom"
import styles from "./index.module.scss"
import logo from "../../assets/images/logo.svg"

import { FiMenu } from "react-icons/fi"
import { useState } from "react"
import { Menu } from "../menu"

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.right}>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}
