import React from "react"

import { FaRegStar } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"
import { Genre, Movie } from "../../app/types"
import "./index.scss"

type Props = {
  movie: Movie
  sizeSlider?: number
}

export const Card: React.FC<Props> = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__top">
        <img
          src={movie.poster}
          alt="movie-card"
          className="movie-card__image"
        />

        <div className="movie-card__overlay">
          <div className="movie-card__info">
            <p className="movie-card__rating">{movie.rating.value}</p>
            <p className="movie-card__genres">
              {movie.genres.map((genre: Genre) => (
                <p className="movie-card__genre">{genre.name}</p>
              ))}
            </p>
            <p className="movie-card__duration">{movie.duration}</p>
          </div>
          <div className="movie-card__actions">
            <div className="movie-card__action">
              <MdFavoriteBorder />
            </div>
            <div className="movie-card__action">
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
      <div className="movie-card__body">
        <div className="movie-card__body-top">
          <h3 className="movie-card__title">{movie.title}</h3>
          <p className="movie-card__year">{movie.production_year}</p>
        </div>
      </div>
    </div>
  )
}
