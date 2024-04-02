import React from "react"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
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
    link: "",
    icon: <FaHome />,
  },
  {
    id: 2,
    category: "Фильмы",
    link: "movies",
    icon: <MdLocalMovies />,
  },
  {
    id: 3,
    category: "Поиск",
    link: "search",
    icon: <IoSearch />,
  },
]

export const Menu: React.FC<Props> = ({}) => {
  return (
    <div className={(styles.menu, styles.fixedMenu)}>
      {/* <nav className={styles.menuList}>
        {menuItems.map(menuItem => (
          <React.Fragment key={menuItem.id}>
            <li className={styles.menuItem}>
              <Link to={`/${menuItem.link}`}>{menuItem.category}</Link>
            </li>
            <li key={menuItem.id} className={styles.menuItemMb}>
              <Link to={`/${menuItem.link}`}>{menuItem.icon}</Link>
              {menuItem.category}
            </li>
          </React.Fragment>
        ))}
      </nav> */}
    </div>
  )
}
