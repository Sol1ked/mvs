import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
  selected: string
  setSelected: (tabName: string) => void
  children: ReactNode
}

export const Tabs: React.FC<Props> = ({ selected, setSelected, children }) => {
  console.log(selected)

  return (
    <div className={styles.tabs}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            selected: selected === child.props.label,
            onClick: () => setSelected(child.props.label),
          })
        }
        return child
      })}
    </div>
  )
}
