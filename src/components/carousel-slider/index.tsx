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
  const [disableButtons, setDisableButtons] = useState(false)
  const gapSize = 32

  const isPosW = ref.current
    ? Math.floor(
        ((ref.current?.children[0].clientWidth + gapSize) * movies.length) /
          ref.current.clientWidth,
      )
    : 0

  const totalWidth = ref.current ? ref.current.clientWidth * isPosW : 0

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

  const delayOnClick = () => {
    setDisableButtons(true)
    setTimeout(() => {
      setDisableButtons(false)
    }, 700)
  }

  const nextSlide = () => {
    if (!disableButtons) {
      setSizeSlider(
        prevSizeSlider =>
          prevSizeSlider -
          (ref.current ? ref.current.clientWidth + gapSize : 0),
      )

      delayOnClick()
    }

    if (-sizeSlider >= totalWidth) {
      setSizeSlider(0)
    }
  }

  const prevSlide = () => {
    if (!disableButtons) {
      setSizeSlider(
        prevSizeSlider =>
          prevSizeSlider + (ref.current ? ref.current.clientWidth : 0),
      )
      delayOnClick()
    }
    if (ref.current && sizeSlider >= 0) {
      setSizeSlider(-totalWidth + ref.current?.clientWidth)
    }
  }

  return (
    <div className={styles.movies}>
      <div
        className={styles.container}
        ref={ref}
        style={{ transform: `translate(${sizeSlider}px)` }}
      >
        {movies.map((movie: any) =>
          typeSliderElem === "slide" ? (
            <CarouselSlide
              key={movie.id}
              movie={movie}
              sizeSlider={sizeSlider}
            />
          ) : (
            <Card
              typeCard={typeCard}
              key={movie.id}
              movie={movie}
              sizeSlider={sizeSlider}
            />
          ),
        )}
      </div>
      {ref.current && ref.current.clientWidth < totalWidth && (
        <div className={styles.actions}>
          <FaAngleLeft onClick={prevSlide} />
          <FaAngleRight onClick={nextSlide} />
        </div>
      )}
    </div>
  )
}
