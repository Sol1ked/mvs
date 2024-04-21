import React from "react"
import { Movie } from "../../app/types"
import { CarouselSlider } from "../carousel-slider"

type Props = {
  movies: Movie[]
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
