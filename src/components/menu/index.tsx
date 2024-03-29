import React from "react"
import styles from "./styles.module.scss"
import { Profile } from "../profile"
import { Search } from "../search"
import { IoClose } from "react-icons/io5"

type Props = {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

const menuItems = [
  {
    id: 1,
    category: "Меню",
    items: [
      { id: 1, title: "Главная", link: "/" },
      { id: 2, title: "Избранное", link: "/favorite" },
      { id: 2, title: "Просмотренные", link: "/watched" },
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
  const menuClasses = isOpen ? `${styles.menu} ${styles.open}` : styles.menu

  return (
    <div className={menuClasses}>
      <IoClose onClick={() => setIsOpen(false)} />
    </div>
  )
}
