import React from "react"
import "./index.scss"

type Props = {
  text: string
}

export const ErrorMessage: React.FC<Props> = ({ text }) => {
  return <p className="error-message">{text}</p>
}
