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
      <div className="card__info">
        <h3 className="card__title">{movie.title}</h3>
        <p className="card__year">{movie.production_year}</p>
      </div>
    </div>
  )
}
