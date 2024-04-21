import { useSelector } from "react-redux"
import {
  useBigRatingMoviesQuery,
  useNewMoviesQuery,
  useWatchedMoviesQuery,
} from "../../app/services/movieApi"
import test3 from "../../assets/images/test4.jpg"
import { CarouselBlock } from "../../components/carousel-block"
import { CarouselSlider } from "../../components/carousel-slider"
import { selectIsAuthenticated } from "../../features/user/userSlice"
import "./index.scss"

const testMovies: any = [
  {
    id: 1,
    title: "Batman",
    poster: test3,
  },
  {
    id: 2,
    title: "Batman2",
    poster: test3,
  },
  {
    id: 3,
    title: "Batman3",
    poster: test3,
  },
  {
    id: 4,
    title: "Batman4",
    poster: test3,
  },
  {
    id: 5,
    title: "Batman5",
    poster: test3,
  },
  {
    id: 6,
    title: "Batman6",
    poster: test3,
  },
  {
    id: 7,
    title: "Batman7",
    poster: test3,
  },
  {
    id: 8,
    title: "Batman8",
    poster: test3,
  },
  {
    id: 9,
    title: "Batman9",
    poster: test3,
  },
  {
    id: 10,
    title: "Batman10",
    poster: test3,
  },
  {
    id: 11,
    title: "Batman11",
    poster: test3,
  },
  {
    id: 12,
    title: "Batman12",
    poster: test3,
  },
]

export const Movies = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const { data: newMovies } = useNewMoviesQuery()
  const { data: watchedMovies } = useWatchedMoviesQuery()
  const { data: bigRatingMovies } = useBigRatingMoviesQuery()

  return (
    <div className="movies">
      <CarouselSlider
        movies={newMovies || testMovies}
        typeSliderElem={"slide"}
        //Добавить скелетон вместо testMovies
      />
      {isAuthenticated && (
        <>
          <CarouselBlock
            movies={watchedMovies || testMovies}
            //Добавить скелетон вместо testMovies
            typeSliderElem={"card"}
            typeCard={"watched"}
            title={"Вы смотрели"}
          />
        </>
      )}
      <CarouselBlock
        movies={bigRatingMovies || testMovies}
        //Добавить скелетон вместо testMovies
        typeSliderElem={"card"}
        typeCard={"default"}
        title={"Для вас"}
      />
    </div>
  )
}
