import { useAllMoviesQuery } from "../../app/services/movieApi"
import { Movie } from "../../app/types"
import { Card } from "../../components/card"

export const AllMovies = () => {
  const { data: allMovies } = useAllMoviesQuery()

  return (
    <>
      {allMovies &&
        allMovies.map((movie: Movie) => <Card key={movie.id} movie={movie} />)}
    </>
  )
}
