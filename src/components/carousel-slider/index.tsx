import { useEffect, useRef, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { Movie } from "../../app/types"
import { Card } from "../card"
import { CarouselSlide } from "./carousel-slide"
import "./index.scss"

type Props = {
  movies: Movie[]
  typeSliderElem: "slide" | "card"
}

export const CarouselSlider: React.FC<Props> = ({ movies, typeSliderElem }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [sizeSlider, setSizeSlider] = useState(0)
  const [disableButtons, setDisableButtons] = useState(false)
  const gapSize = 32

  useEffect(() => {
    const updateSlideWidth = () => {
      if (ref.current) {
        setSlideWidth(ref.current?.clientWidth)
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

  const isClassNameIncluded = (
    ref: React.RefObject<HTMLDivElement>,
    className: string,
  ) => {
    return (
      ref &&
      ref.current &&
      ref.current.children[0]?.className.includes(className)
    )
  }

  const isSlide = isClassNameIncluded(ref, "__slide")

  const calculateSlideWidth = () => {
    return ref.current
      ? isSlide
        ? ref.current.clientWidth + gapSize
        : ref.current.clientWidth
      : 0
  }

  const nextSlide = () => {
    if (!disableButtons) {
      setSizeSlider(prevSizeSlider => prevSizeSlider - calculateSlideWidth())
      delayOnClick()
    }

    if (-sizeSlider >= totalWidth) {
      setSizeSlider(0)
    }
  }

  const prevSlide = () => {
    if (!disableButtons) {
      setSizeSlider(prevSizeSlider => prevSizeSlider + calculateSlideWidth())
      delayOnClick()
    }

    if (ref.current && sizeSlider >= 0) {
      const slideWidth = calculateSlideWidth()
      setSizeSlider(
        isSlide
          ? -(slideWidth * (isSlide ? movies.length - 1 : movies.length))
          : -totalWidth,
      )
    }
  }

  const isMobile = ref.current ? ref.current?.clientWidth <= 400 : 0

  const calculateTotalWidth = () => {
    return ref.current
      ? ref.current?.clientWidth *
          Math.floor(
            ((ref.current?.children[0]?.clientWidth + gapSize) *
              (isMobile || isSlide ? movies.length - 1 : movies.length)) /
              ref.current?.clientWidth,
          )
      : 0
  }

  const totalWidth = calculateTotalWidth()

  return (
    <div className="carousel-slider">
      <div
        className="carousel-slider__container"
        ref={ref}
        style={{ transform: `translate(${sizeSlider}px)` }}
      >
        {movies.map((movie: Movie) =>
          typeSliderElem === "slide" ? (
            <CarouselSlide key={movie.id} movie={movie} />
          ) : (
            <Card key={movie.id} movie={movie} sizeSlider={sizeSlider} />
          ),
        )}
      </div>
      {ref.current && ref.current?.clientWidth < totalWidth && (
        <div className="carousel-slider__actions">
          <FaAngleLeft onClick={prevSlide} />
          <FaAngleRight onClick={nextSlide} />
        </div>
      )}
    </div>
  )
}
