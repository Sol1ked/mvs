import { useSelector } from "react-redux"
import {
  useBigRatingMoviesQuery,
  useNewMoviesQuery,
  useWatchedMoviesQuery,
} from "../../app/services/movieApi"

import { Movie } from "../../app/types"
import { MovieBlock } from "../../components/movie-block"
import { selectIsAuthenticated } from "../../features/user/userSlice"
import "./index.scss"

const movie: Movie = {
  id: 10,
  title: "Тест",
  production_year: "2005",
  duration: "02:32:00",
  poster:
    "https://www.soyuz.ru/public/uploads/files/2/7623281/2023042718541925ba70c02d.jpg",
  rating: {
    value: 5,
    count: 1,
  },
  genres: [],
}

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
        countSkeleton={1}
      />
      {isAuthenticated && (
        <MovieBlock
          title={"Вы смотрели"}
          moviesArray={watchedMovies || []}
          typeBlock={"slider"}
          typeSliderElem={"card"}
          countSkeleton={6}
        />
      )}
      <MovieBlock
        title={"Фильмы с большим рейтингом"}
        moviesArray={bigRatingMovies || []}
        typeBlock={"slider"}
        typeSliderElem={"card"}
        countSkeleton={6}
      />
    </div>
  )
}
