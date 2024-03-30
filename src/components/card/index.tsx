import React from "react"

import styles from "./index.module.scss"
import { Button } from "../button"

type Props = {
  typeCard: "card" | "miniCard"
}

export const Card: React.FC<Props> = ({ typeCard }) => {
  let cardClass = ""
  let content

  switch (typeCard) {
    case "card":
      cardClass = styles.card
      break
    case "miniCard":
      cardClass = styles.miniCard
      break
  }

  return <>{content}</>
}
