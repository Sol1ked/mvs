import test3 from "../../assets/images/test3.jpg"
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
]
export const Movies = () => {
  return (
    <>
      <CarouselSlider movies={testMovies} />
    </>
  )
}
