// Tab.tsx
import React, { ReactNode } from "react"

type TabProps = {
  label?: string
  selected: string
  onClick: () => void
  children: ReactNode
  name: string
}

export const Tab: React.FC<TabProps> = ({
  selected,
  onClick,
  children,
  name,
}) => {
  return (
    <div onClick={onClick}>
      {name}
      {selected && <div>{children}</div>}
    </div>
  )
}
