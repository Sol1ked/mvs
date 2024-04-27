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
  const rating = movie.rating.value

  const isFirstPartSingleDigit = rating < 10
  const firstPart = isFirstPartSingleDigit ? Math.floor(rating / 10) : 0
  const secondPart = (isFirstPartSingleDigit ? rating % 10 : rating) + ","

  return (
    <div className="movie-card" key={movie.id}>
      <div className="movie-card__top">
        <img
          src={movie.poster}
          alt="movie-card"
          className="movie-card__image"
        />
        <div className="movie-card__overlay">
          <div className="movie-card__info">
            <div className="movie-card__rating">
              <p className="movie-card__rating-integer">{secondPart}</p>
              <p className="movie-card__rating-fraction">{firstPart}</p>
            </div>
            <div className="movie-card__genres">
              {movie.genres.map((genre: Genre, index) => (
                <p className="movie-card__genre" key={genre.id}>
                  {genre.name}
                  {index !== movie.genres.length - 1 ? "," : ""}
                </p>
              ))}
            </div>
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
