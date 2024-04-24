import React from "react"
import { Movie } from "../../app/types"
import { Card } from "../card"
import { CarouselSlider } from "../carousel-slider"
import "./index.scss"

type Props = {
  title?: string
  moviesArray: any
  typeBlock: "slider" | "list"
  typeSliderElem: "slide" | "card"
}

export const MovieBlock: React.FC<Props> = ({
  title,
  moviesArray,
  typeBlock,
  typeSliderElem,
}) => {
  let children

  switch (typeBlock) {
    case "slider":
      children = (
        <CarouselSlider movies={moviesArray} typeSliderElem={typeSliderElem} />
      )
      break
    case "list":
      children = (
        <div className="movie-block__list">
          {moviesArray.map((movie: Movie) => (
            <Card movie={movie} />
          ))}
        </div>
      )
  }

  return (
    <div className="movie-block">
      <h1 className="movie-block__title">{title}</h1>
      {children}
    </div>
  )
}
