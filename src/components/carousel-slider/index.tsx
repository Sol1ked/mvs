import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { Card } from "../card"
import styles from "./index.module.scss"
import { CarouselSlide } from "./carousel-slide"
import { useEffect, useRef, useState } from "react"

type Props = {
  movies: any
  typeSliderElem: "slide" | "card"
  typeCard?: "default" | "watched"
}

export const CarouselSlider: React.FC<Props> = ({
  movies,
  typeSliderElem,
  typeCard,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [slideWidth, setSlideWidth] = useState(0)
  const [sizeSlider, setSizeSlider] = useState(0)
  let gapSize = 32

  console.log(slideWidth)

  const allWidthSlides = ref.current
    ? (ref.current.children[0].clientWidth + gapSize) * (movies.length - 1)
    : 0

  console.log(allWidthSlides)

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

  const nextSlide = () => {
    setSizeSlider(
      prevSizeSlider =>
        prevSizeSlider - (ref.current ? ref.current.clientWidth + gapSize : 0),
    )

    if (-sizeSlider > allWidthSlides) {
      setSizeSlider(0)
    }
  }

  const prevSlide = () => {
    setSizeSlider(
      prevSizeSlider =>
        prevSizeSlider + (ref.current ? ref.current.clientWidth + gapSize : 0),
    )

    if (sizeSlider === 0) {
      setSizeSlider(-allWidthSlides)
      console.log(allWidthSlides)
    }
  }

  return (
    <div className={styles.movies} ref={ref}>
      {movies.map((movie: any) =>
        typeSliderElem === "slide" ? (
          <CarouselSlide key={movie.id} movie={movie} sizeSlider={sizeSlider} />
        ) : (
          <Card
            typeCard={typeCard}
            key={movie.id}
            movie={movie}
            sizeSlider={sizeSlider}
          />
        ),
      )}
      <div className={styles.actions}>
        <FaAngleLeft onClick={prevSlide} />
        <FaAngleRight onClick={nextSlide} />
      </div>
    </div>
  )
}
