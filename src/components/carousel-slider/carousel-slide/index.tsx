import { Movie } from "../../../app/types"
import { Button } from "../../button"
import styles from "./index.module.scss"

type Props = {
  movie: Movie
}

export const CarouselSlide = ({ movie }: Props) => {
  return (
    <div
      className={styles.slide}
      style={{
        backgroundImage: `url(${movie.poster})`,
      }}
    >
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <Button typeButton={"full"} type={"submit"}>
          Смотреть
        </Button>
      </div>
    </div>
  )
}
