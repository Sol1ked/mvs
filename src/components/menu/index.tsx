import React from "react"
import styles from "./styles.module.scss"
import { Link, useLocation } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { MdLocalMovies } from "react-icons/md"
import { IoSearch } from "react-icons/io5"

type Props = {}

type MenuItem = {
  id: number
  category: string
  link: string
  icon: JSX.Element
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    category: "Главная",
    link: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    category: "Фильмы",
    link: "/movies",
    icon: <MdLocalMovies />,
  },
  {
    id: 3,
    category: "Поиск",
    link: "/search",
    icon: <IoSearch />,
  },
]

export const Menu: React.FC<Props> = ({}) => {
  const location = useLocation()

  return (
    <div className={styles.menu}>
      <nav className={styles.menuList}>
        {menuItems.map(menuItem => (
          <li
            key={menuItem.id}
            className={`${styles.menuItem} ${
              menuItem.link === location.pathname ? styles.active : ""
            }`}
          >
            <Link to={`${menuItem.link}`}>
              <span className={styles.smallScreen}>{menuItem.icon}</span>
              <span className={styles.largeScreen}>{menuItem.category}</span>
            </Link>
          </li>
        ))}
      </nav>
    </div>
  )
}
