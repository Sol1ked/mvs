import React from "react"

import styles from "./index.module.scss"
import { Button } from "../button"

type Props = {
  typeCard: "slide" | "card" | "miniCard"
  movie: any
}

export const Card: React.FC<Props> = ({ movie, typeCard }) => {
  let cardClass = ""
  let size = 0
  let content

  switch (typeCard) {
    case "slide":
      cardClass = styles.slide
      content = (
        <div
          className={`${styles.card} ${cardClass}`}
          style={{
            backgroundImage: `url(${movie.imgSrc})`,
            transform: `translateX(${size}px)`,
          }}
        >
          {/* <div className={styles.info}>
            <h1>{movie.title}</h1>
            <p>{movie.desc}</p>
            <Button>Смотреть</Button>
          </div> */}
        </div>
      )
      break
    case "card":
      cardClass = styles.card
      break
    case "miniCard":
      cardClass = styles.miniCard
      break
  }

  return <>{content}</>
}
