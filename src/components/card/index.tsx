import React from "react"

import { Movie } from "../../app/types"
import styles from "./index.module.scss"

type Props = {
  typeCard?: "default" | "watched" | "mini"
  movie: Movie
  sizeSlider?: number
}

export const Card: React.FC<Props> = ({ typeCard, movie, sizeSlider }) => {
  let cardClass = `${styles.card}`

  switch (typeCard) {
    case "default":
      cardClass += ` ${styles.default}`
      break
    case "watched":
      cardClass += ` ${styles.watched}`
      break
  }

  return (
    <div className={cardClass}>
      <img src={movie.poster} alt="movie-card" />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
      </div>
    </div>
  )
}
