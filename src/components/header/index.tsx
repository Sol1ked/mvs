import { Link } from "react-router-dom"
import styles from "./index.module.scss"
import logo from "../../assets/images/logo.svg"
import { Profile } from "../profile"
import { Search } from "../search"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <Search />
      </div>
      <Profile />
    </div>
  )
}
