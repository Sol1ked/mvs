import "./index.scss"

type Props = {
  count: number
  typeSliderElem: string
}

export const Skeleton: React.FC<Props> = ({ count, typeSliderElem }) => {
  const skeletonClass = `skeleton skeleton_${typeSliderElem}`

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div className={skeletonClass} key={index}></div>
      ))}
    </>
  )
}
