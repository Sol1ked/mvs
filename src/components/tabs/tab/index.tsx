import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type TabProps = {
  label: string
  selected: string
  setSelected: () => void
  name: string
}

export const Tab: React.FC<TabProps> = ({
  selected,
  setSelected,
  label,
  name,
}) => {
  let isActive = selected === name

  return (
    <div
      onClick={setSelected}
      className={isActive ? `${styles.active} ${styles.tab}` : styles.tab}
    >
      <p className={styles.tabContent}>{label}</p>
    </div>
  )
}
