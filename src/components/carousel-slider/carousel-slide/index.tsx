import React from "react"
import styles from "./index.module.scss"
import { Button } from "../../button"

export const CarouselSlide = ({ movie, sizeSlider }: any) => {
  return (
    <div
      className={styles.slide}
      style={{
        backgroundImage: `url(${movie.imgSrc})`,
        transform: `translate(${sizeSlider}px)`,
      }}
    >
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <p>{movie.desc}</p>
        <Button>Смотреть</Button>
      </div>
    </div>
  )
}
