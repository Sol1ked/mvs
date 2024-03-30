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
  {
    id: 3,
    category: "Дополнительно",
    items: [{ id: 1, title: "Выйти", link: "/logout" }],
  },
]

export const Menu: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const menuClasses = isOpen ? `${styles.menu} ${styles.burger}` : styles.menu
  const [isOpenId, setIsOpenId] = useState<number>(0)

  return (
    <div className={menuClasses}>
      {/* <IoClose onClick={() => setIsOpen(false)} /> */}
      <ul className={styles.list}>
        {menuItems.map((menuItem, index) => (
          <li
            key={menuItem.id}
            className={styles.item}
            onClick={() => setIsOpenId(index + 1)}
          >
            <span className={styles.subtitle}>{menuItem.category}</span>
            {menuItem.items.length > 0 && <FaCaretDown />}
            {isOpenId === menuItem.id && (
              <ul className={styles.sibList}>
                {menuItem.items.map(item => (
                  <li key={item.id} className={styles.subitem}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <Button>Войти</Button>
    </div>
  )
}
