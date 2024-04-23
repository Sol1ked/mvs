import { useAllMoviesQuery } from "../../app/services/movieApi"
import { MovieBlock } from "../../components/movie-block"

export const AllMovies = () => {
  const { data: allMovies } = useAllMoviesQuery()

  return (
    <>
      {allMovies && (
        <MovieBlock
          title={"Фильмы"}
          moviesArray={allMovies}
          typeCard={"default"}
          typeBlock={"list"}
        />
      )}
    </>
  )
}
