import { IoSearch } from "react-icons/io5"
import styles from "./index.module.scss"
import { Input } from "../input"

export const Search = () => {
  return (
    <div className={styles.search}>
      <IoSearch />
    </div>
  )
}
