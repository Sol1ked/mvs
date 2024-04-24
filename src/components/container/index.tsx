import React from "react"
import "./index.scss"

type Props = {
  children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="wrapper__container">{children}</div>
}
