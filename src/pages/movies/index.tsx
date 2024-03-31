import test3 from "../../assets/images/test3.jpg"
import { CarouselBlock } from "../../components/carousel-block"
import { CarouselSlider } from "../../components/carousel-slider"
import styles from "./index.module.scss"

const testMovies: any = [
  {
    id: 1,
    title: "Batman",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Batman2",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    title: "Batman3",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    title: "Batman4",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    title: "Batman5",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    title: "Batman6",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 7,
    title: "Batman7",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 8,
    title: "Batman8",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 9,
    title: "Batman9",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 10,
    title: "Batman10",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 11,
    title: "Batman11",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 12,
    title: "Batman12",
    imgSrc: test3,
    desc: " Lorem ipsum dolor sit amet.",
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
      />
      <CarouselBlock
        movies={testMovies}
        typeSliderElem={"card"}
        typeCard={"default"}
      />
    </div>
  )
}
