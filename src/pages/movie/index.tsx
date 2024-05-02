import React from "react"
import { useParams } from "react-router-dom"
import { useGetMovieByIdQuery } from "../../app/services/movieApi"
import "./index.scss"
import { FaRegHeart } from "react-icons/fa"
import { Button } from "../../components/button"

const Movie = () => {
  const { id } = useParams()
  const { data: movie } = useGetMovieByIdQuery(id || "0")
  console.log(movie)
  //Вынести оценку в helpers
  return (
    <div className="movie">
      <div className="player"></div>
      <div className="movie__specification">
        <img src={movie?.poster} alt="movie-poster" className="movie__poster" />
        <div className="movie__info">
          <div className="movie__info-top">
            <h1 className="movie__title">{movie?.title}</h1>
            <FaRegHeart className="movie__favourite" />
          </div>
          <div className="movie__info-bottom">
            <div className="movie__details">
              <span className="movie__mark">
                Рейтинг: {movie?.rating.value}
              </span>
              <span className="movie__year">{movie?.production_year}</span>
              <span className="movie__duration">{movie?.duration}</span>
            </div>
            <Button typeButton={"full"} type={"button"}>
              Оценить фильм
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
