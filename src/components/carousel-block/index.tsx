import React from "react"
import { CarouselSlider } from "../carousel-slider"

type Props = {
  movies: any
  typeSliderElem: "slide" | "card"
  typeCard?: "default" | "watched"
  title: string
}

export const CarouselBlock: React.FC<Props> = ({
  movies,
  typeCard,
  typeSliderElem,
  title,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <CarouselSlider
        movies={movies}
        typeSliderElem={typeSliderElem}
        typeCard={typeCard}
      />
    </>
  )
}
