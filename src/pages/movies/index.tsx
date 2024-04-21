import test3 from "../../assets/images/test4.jpg"
import { CarouselBlock } from "../../components/carousel-block"
import { CarouselSlider } from "../../components/carousel-slider"
import styles from "./index.module.scss"

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
  return (
    <div className={styles.movies}>
      <CarouselSlider movies={testMovies} typeSliderElem={"slide"} />
      <CarouselBlock
        movies={testMovies}
        typeSliderElem={"card"}
        typeCard={"watched"}
        title={"Вы смотрели"}
      />
      <CarouselBlock
        movies={testMovies}
        typeSliderElem={"card"}
        typeCard={"default"}
        title={"Для вас"}
      />
    </div>
  )
}
