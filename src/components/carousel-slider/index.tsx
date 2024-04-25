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
  // Создание ссылки на DOM-элемент
  const [slideWidth, setSlideWidth] = useState(0) // Состояние для ширины слайда
  const [sizeSlider, setSizeSlider] = useState(0) // Состояние для текущего смещения слайдера
  const [disableButtons, setDisableButtons] = useState(false) // Состояние для отключения кнопок управления слайдером
  const gapSize = 32 // Размер промежутка между слайдами
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Эффект, срабатывающий после каждого обновления компонента
    const updateSlideWidth = () => {
      // Функция для обновления ширины слайда
      if (ref.current) {
        // Если ссылка на DOM-элемент существует
        setSlideWidth(ref.current?.clientWidth) // Установка ширины слайда
        setSizeSlider(0) // Установка смещения слайдера в 0
      }
    }
    window.addEventListener("resize", updateSlideWidth) // Добавление слушателя события resize для обновления ширины слайда
    updateSlideWidth() // Вызов функции обновления ширины слайда

    return () => {
      // Функция, срабатывающая при размонтировании компонента
      window.removeEventListener("resize", updateSlideWidth) // Удаление слушателя события resize
    }
  }, []) // Зависимость, указывающая на то, что эффект должен сработать только один раз при монтировании компонента

  const isClassNameIncluded = (
    // Функция для проверки наличия класса у элемента
    ref: React.RefObject<HTMLDivElement>, // Ссылка на DOM-элемент
    className: string, // Имя класса для проверки
  ) => {
    return (
      ref &&
      ref.current &&
      ref.current.children[0]?.className.includes(className) // Проверка наличия класса у первого дочернего элемента
    )
  }

  const isMobile = ref.current ? ref.current?.clientWidth <= 400 : 0 // Проверка, является ли устройство мобильным

  const isSlide = isClassNameIncluded(ref, "__slide") // Проверка, является ли слайдер слайдовым

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
  const shouldShowLeftArrow = sizeSlider !== 0
  const shouldShowRightArrow = sizeSlider !== -totalWidth

  const delayOnClick = () => {
    // Функция для задержки клика по кнопкам управления слайдером
    setDisableButtons(true) // Установка флага отключения кнопок в true
    setTimeout(() => {
      // Задержка выполнения следующего кода
      setDisableButtons(false) // Установка флага отключения кнопок в false
    }, 700) // Задержка в 700 миллисекунд
  }

  const calculateSlideWidth = () => {
    // Функция для расчета ширины слайда
    return ref.current // Если ссылка на DOM-элемент существует
      ? isSlide // Если слайдер слайдовой
        ? ref.current.clientWidth + gapSize // Возвращаем ширину слайда с учетом промежутка
        : ref.current.clientWidth // Иначе возвращаем ширину слайда без промежутка
      : 0 // Возвращаем 0, если ссылка на DOM-элемент не существует
  }

  const nextSlide = () => {
    // Функция для перехода к следующему слайду
    if (!disableButtons) {
      // Если кнопки управления не отключены
      setSizeSlider(prevSizeSlider => prevSizeSlider - calculateSlideWidth()) // Уменьшаем текущее смещение на ширину слайда
      delayOnClick() // Задержка клика по кнопкам
    }

    if (-sizeSlider >= totalWidth) {
      // Если текущее смещение превысило общую ширину слайдера
      setSizeSlider(0) // Возвращаемся к началу слайдера
    }
  }

  const prevSlide = () => {
    // Функция для перехода к предыдущему слайду
    if (!disableButtons) {
      // Если кнопки управления не отключены
      setSizeSlider(prevSizeSlider => prevSizeSlider + calculateSlideWidth()) // Увеличиваем текущее смещение на ширину слайда
      delayOnClick() // Задержка клика по кнопкам
    }

    if (ref.current && sizeSlider >= 0) {
      // Если текущее смещение не меньше 0
      const slideWidth = calculateSlideWidth() // Рассчитываем ширину слайда
      setSizeSlider(
        // Устанавливаем текущее смещение
        isSlide // Если слайдер слайдовой
          ? -(slideWidth * (isSlide ? movies.length - 1 : movies.length)) // Устанавливаем смещение на последний слайд
          : -totalWidth, // Иначе устанавливаем смещение на конец слайдера
      )
    }
  }

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

      <div className="carousel-slider__actions">
        <div
          className={`${shouldShowLeftArrow ? "carousel-slider__action carousel-slider__action_active" : "carousel-slider__action"}`}
        >
          <FaAngleLeft onClick={prevSlide} />
        </div>
        <div
          className={`${shouldShowRightArrow ? "carousel-slider__action carousel-slider__action_active" : "carousel-slider__action"}`}
        >
          <FaAngleRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
}
