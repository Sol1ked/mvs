import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { Card } from "../card"
import styles from "./index.module.scss"
import { CarouselSlide } from "./carousel-slide"
import { useRef, useState } from "react"

type Props = {
  movies: any
}

export const CarouselSlider: React.FC<Props> = ({ movies }) => {
  const ref = useRef<HTMLDivElement>(null)
  const slideWidth = (ref.current && ref.current.clientWidth) || 0
  const [sizeSlider, setSizeSlider] = useState<number>(slideWidth)

  const allWidthSlides =
    ref.current && (movies.length - 1) * ref.current.clientWidth

  const nextSlide = () => {
    if (ref.current) {
      const width = ref.current.clientWidth
      setSizeSlider(prevSizeSlider => prevSizeSlider - width)
    }

    if (-sizeSlider === allWidthSlides) {
      setSizeSlider(0)
    }
  }

  const prevSlide = () => {
    if (ref.current) {
      const width = ref.current.clientWidth
      setSizeSlider(prevSizeSlider => prevSizeSlider + width)
    }

    if (sizeSlider === 0) {
      setSizeSlider(-(sizeSlider * (movies.length - 1)))
    }
  }

  return (
    <div className={styles.movies} ref={ref}>
      {movies.map((movie: any) => (
        <CarouselSlide key={movie.id} movie={movie} sizeSlider={sizeSlider} />
      ))}
      <div className={styles.actions}>
        <FaAngleLeft onClick={() => prevSlide()} />
        <FaAngleRight onClick={() => nextSlide()} />
      </div>
    </div>
  )
}
