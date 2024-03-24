import React from "react"
import test3 from "../../assets/images/test3.jpg"
import styles from "./index.module.scss"

export const Movies = () => {
  return (
    <div className={styles.movies} style={{ backgroundImage: `url(${test3})` }}>
      12
    </div>
  )
}
