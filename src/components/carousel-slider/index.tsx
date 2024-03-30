import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { Card } from "../card"
import styles from "./index.module.scss"
import { CarouselSlide } from "./carousel-slide"
import { useEffect, useRef, useState } from "react"

type Props = {
  movies: any
}

export const CarouselSlider: React.FC<Props> = ({ movies }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [sizeSlider, setSizeSlider] = useState(0)

  useEffect(() => {
    const updateSlideWidth = () => {
      if (ref.current) {
        setSlideWidth(ref.current.clientWidth)
        setSizeSlider(0)
      }
    }
    window.addEventListener("resize", updateSlideWidth)
    updateSlideWidth()

    return () => {
      window.removeEventListener("resize", updateSlideWidth)
    }
  }, [])

  const allWidthSlides = (movies.length - 1) * slideWidth

  const nextSlide = () => {
    setSizeSlider(
      prevSizeSlider =>
        prevSizeSlider - (ref.current ? ref.current.clientWidth : 0),
    )

    if (-sizeSlider === allWidthSlides) {
      setSizeSlider(0)
    }
  }

  const prevSlide = () => {
    setSizeSlider(
      prevSizeSlider =>
        prevSizeSlider + (ref.current ? ref.current.clientWidth : 0),
    )

    if (sizeSlider === 0) {
      setSizeSlider(-(slideWidth * (movies.length - 1)))
    }
  }

  return (
    <div className={styles.movies} ref={ref}>
      {movies.map((movie: any) => (
        <CarouselSlide key={movie.id} movie={movie} sizeSlider={sizeSlider} />
      ))}
      <div className={styles.actions}>
        <FaAngleLeft onClick={prevSlide} />
        <FaAngleRight onClick={nextSlide} />
      </div>
    </div>
  )
}
