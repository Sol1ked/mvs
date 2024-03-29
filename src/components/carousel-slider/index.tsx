import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { Card } from "../card"
import styles from "./index.module.scss"

type Props = {
  movies: any
}

export const CarouselSlider: React.FC<Props> = ({ movies }) => {
  return (
    <div className={styles.movies}>
      {movies.map((movie: any) => (
        <Card key={movie.id} typeCard={"slide"} movie={movie} />
      ))}
      <div className={styles.actions}>
        <FaAngleLeft />
        <FaAngleRight />
      </div>
    </div>
  )
}
