import React from "react"
import styles from "./index.module.scss"
import test from "../../assets/images/test.jpg"
export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <img className={styles.image} src={test} alt="profile-image" />
        <h3 className={styles.name}>Test</h3>
      </div>
    </div>
  )
}
