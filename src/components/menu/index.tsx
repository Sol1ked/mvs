import React, { useState } from "react"
import styles from "./styles.module.scss"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import { Button } from "../button"
import { FaCaretDown } from "react-icons/fa6"

type Props = {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

type MenuSubItem = {
  id: number
  title: string
  link: string
}

type MenuItem = {
  id: number
  category: string
  items: MenuSubItem[]
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    category: "Меню",
    items: [
      { id: 1, title: "Главная", link: "/" },
      { id: 2, title: "Избранное", link: "/favorite" },
      { id: 3, title: "Просмотренные", link: "/watched" },
    ],
  },
  {
    id: 2,
    category: "Сообщество",
    items: [
      { id: 1, title: "Профиль", link: "/profile" },
      { id: 2, title: "Друзья", link: "/friends" },
    ],
  },
]

export const Menu: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const menuClasses = isOpen ? `${styles.menu} ${styles.burger}` : styles.menu
  const [isOpenId, setIsOpenId] = useState<number>(0)

  return (
    <div className={menuClasses} onMouseLeave={() => setIsOpenId(-1)}>
      <nav className={styles.menu}>
        {menuItems.map(menuItem => (
          <li
            key={menuItem.id}
            className={styles.item}
            onMouseEnter={() => setIsOpenId(menuItem.id)}
          >
            <span className={styles.category}>{menuItem.category}</span>
            {menuItem.category.length > 0 && <FaCaretDown />}
            {isOpenId === menuItem.id && (
              <ul className={styles.subList}>
                {menuItem.items.map(subItem => (
                  <Link
                    className={styles.subItem}
                    key={subItem.id}
                    to={subItem.link}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </nav>
      <Button>Войти</Button>
    </div>
  )
}
