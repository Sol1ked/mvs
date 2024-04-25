import { useSelector } from "react-redux"
import {
  useBigRatingMoviesQuery,
  useNewMoviesQuery,
  useWatchedMoviesQuery,
} from "../../app/services/movieApi"

import { MovieBlock } from "../../components/movie-block"
import { selectIsAuthenticated } from "../../features/user/userSlice"
import "./index.scss"

export const Movies = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const { data: newMovies } = useNewMoviesQuery()
  const { data: watchedMovies } = useWatchedMoviesQuery()
  const { data: bigRatingMovies } = useBigRatingMoviesQuery()

  return (
    <div className="movies">
      <MovieBlock
        moviesArray={newMovies || []}
        typeBlock={"slider"}
        typeSliderElem={"slide"}
      />
      {isAuthenticated && (
        <MovieBlock
          title={"Вы смотрели"}
          moviesArray={watchedMovies || []}
          typeBlock={"slider"}
          typeSliderElem={"card"}
        />
      )}
      <MovieBlock
        title={"Фильмы с большим рейтингом"}
        moviesArray={bigRatingMovies || []}
        typeBlock={"slider"}
        typeSliderElem={"card"}
      />
    </div>
  )
}
