import React from "react"

import { Movie } from "../../app/types"
import "./index.scss"

type Props = {
  movie: Movie
  sizeSlider?: number
}

export const Card: React.FC<Props> = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.poster} alt="movie-card" className="card__image" />
      <h3 className="card__title">{movie.title}</h3>
    </div>
  )
}
