import { IoSearch } from "react-icons/io5"
import styles from "./index.module.scss"

export const Search = () => {
  return (
    <div className={styles.search}>
      <IoSearch />
      <span>Поиск</span>
    </div>
  )
}
