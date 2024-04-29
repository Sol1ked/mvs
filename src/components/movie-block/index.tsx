import React from "react"
import { Movie } from "../../app/types"
import { Card } from "../card"
import { CarouselSlider } from "../carousel-slider"
import { Skeleton } from "../skeleton"
import "./index.scss"

type Props = {
  title?: string
  moviesArray: Movie[]
  typeBlock: "slider" | "list"
  typeSliderElem: "slide" | "card"
  countSkeleton: number
}

export const MovieBlock: React.FC<Props> = ({
  title,
  moviesArray,
  typeBlock,
  typeSliderElem,
  countSkeleton,
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
        <>
          {moviesArray.map((movie: Movie) => (
            <Card movie={movie} />
          ))}
        </>
      )
  }

  return (
    <>
      <div className="movie-block">
        <>
          {title && <h1 className="movie-block__title">{title}</h1>}
          <div className="movie-block__list">
            {moviesArray.length ? (
              children
            ) : (
              <Skeleton count={countSkeleton} typeSliderElem={typeSliderElem} />
            )}
          </div>
        </>
      </div>
    </>
  )
}
