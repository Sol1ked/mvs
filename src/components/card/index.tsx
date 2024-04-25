import React, { useState } from "react"

import { FaRegStar } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"
import { Genre, Movie } from "../../app/types"
import "./index.scss"

type Props = {
  movie: Movie
  sizeSlider?: number
}

export const Card: React.FC<Props> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    console.log(movie)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card__container">
        <img src={movie.poster} alt="movie-card" className="card__image" />

        {/* hover-card */}
        <div className="card__overlay">
          <div className="card__overlay-info">
            <span className="card__overlay-rating">{movie?.rating.value}</span>
            <span className="card__overlay-year">{movie.production_year}</span>
            <span className="card__overlay-genres">
              {movie.genres &&
                movie.genres.map((genre: Genre) => (
                  <span className="card__overlay-genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </span>
            <span className="card__overlay-duration">{movie.duration}</span>
          </div>

          <div className="card__overlay-actions">
            <div className="card__overlay-action">
              <MdFavoriteBorder />
            </div>
            <div className="card__overlay-action">
              <FaRegStar />
            </div>
          </div>
        </div>
        {/* hover-card */}

        <div className="card__info">
          <h3 className="card__title">{movie.title}</h3>
          <p className="card__year">{movie.production_year}</p>
        </div>
      </div>
    </div>
  )
}
