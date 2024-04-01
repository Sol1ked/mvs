import React from "react"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
type Props = {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

type MenuItem = {
  id: number
  category: string
  link: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    category: "Главная",
    link: "/",
  },
  {
    id: 2,
    category: "Фильмы",
    link: "/movies",
  },
]

export const Menu: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const menuClasses = isOpen ? `${styles.menu} ${styles.burger}` : styles.menu

  return (
    <div className={menuClasses}>
      <nav className={styles.menuList}>
        {menuItems.map(menuItem => (
          <li key={menuItem.id} className={styles.menuItem}>
            <Link to={`/${menuItem.link}`}>{menuItem.category}</Link>
          </li>
        ))}
      </nav>
    </div>
  )
}
