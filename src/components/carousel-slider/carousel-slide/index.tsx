import { Movie } from "../../../app/types"
import { Button } from "../../button"
import "./index.scss"
type Props = {
  movie: Movie
}

export const CarouselSlide = ({ movie }: Props) => {
  return (
    <div
      className="carousel-slider__slide"
      style={{
        backgroundImage: `url(${movie.poster})`,
      }}
    >
      <div className="carousel-slider__slide-info">
        <h1 className="carousel-slider__title">{movie.title}</h1>
        <p className="carousel-slider__text">{movie.production_year} /</p>
        <Button typeButton={"full"} type={"submit"}>
          Смотреть
        </Button>
      </div>
    </div>
  )
}
