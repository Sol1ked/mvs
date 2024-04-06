import { IoSearch } from "react-icons/io5"
import { Input } from "../input"
import styles from "./index.module.scss"

export const SearchField = () => {
  return (
    <div className={styles.searchFiled}>
      <Input type={"search"} placeholder={"Поиск..."} />
      <IoSearch />
    </div>
  )
}
