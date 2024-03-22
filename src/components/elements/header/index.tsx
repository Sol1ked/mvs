import { Link } from "react-router-dom"
import { Profile } from "../profile"
import styles from "./index.module.scss"
import { Search } from "../../UI/search"
import logo from "../../../assets/images/logo.svg"

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
