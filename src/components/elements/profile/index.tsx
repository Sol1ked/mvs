import React from "react"
import styles from "./index.module.scss"
import test from "../../../assets/images/test.jpg"
import { FaCaretDown } from "react-icons/fa"

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__content}>
        <img className={styles.profile__image} src={test} alt="profile-image" />
        <FaCaretDown />
      </div>
    </div>
  )
}
