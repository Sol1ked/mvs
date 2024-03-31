import React from "react"
import { CarouselSlider } from "../carousel-slider"

type Props = {
  movies: any
  typeSliderElem: "slide" | "card"
  typeCard?: "default" | "watched"
}

export const CarouselBlock: React.FC<Props> = ({
  movies,
  typeCard,
  typeSliderElem,
}) => {
  return (
    <>
      <CarouselSlider
        movies={movies}
        typeSliderElem={typeSliderElem}
        typeCard={typeCard}
      />
    </>
  )
}
