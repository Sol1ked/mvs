import { IoSearch } from "react-icons/io5"
import { Input } from "../input"
import styles from "./index.module.scss"
import { Button } from "../button"

export const SearchField = () => {
  return (
    <div className={styles.searchFiled}>
      <Input type={""} placeholder={"Поиск..."} />
      <IoSearch />
    </div>
  )
}
