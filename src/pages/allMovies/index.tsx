import { useAllMoviesQuery } from "../../app/services/movieApi"
import { MovieBlock } from "../../components/movie-block"

export const AllMovies = () => {
  const { data: allMovies } = useAllMoviesQuery()

  return (
    <>
      <MovieBlock
        title={"Фильмы с большим рейтингом"}
        moviesArray={allMovies || []}
        typeBlock={"slider"}
        typeSliderElem={"card"}
        countSkeleton={6}
      />
    </>
  )
}
