import React from "react"

import styles from "./index.module.scss"

type Props = {
  typeCard?: "default" | "watched" | "mini"
  movie: any
  sizeSlider: number
}

export const Card: React.FC<Props> = ({ typeCard, movie, sizeSlider }) => {
  let cardClass = ""

  switch (typeCard) {
    case "default":
      cardClass = styles.default
      break
    case "watched":
      cardClass = styles.watched
      break
  }

  return (
    <div className={cardClass}>
      <img src={movie.imgSrc} alt="movie-card" />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <p>{movie.desc}</p>
      </div>
    </div>
  )
}
