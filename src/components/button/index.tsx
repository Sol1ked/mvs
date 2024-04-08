import styles from "./index.module.scss"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  typeButton: "full" | "text"
  isLoading: boolean
  type: "submit"
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  typeButton,
  type,
  isLoading,

  ...props
}) => {
  let cardClass = `${styles.button}`

  switch (typeButton) {
    case "full":
      cardClass += ` ${styles.full}`
      break
    case "text":
      cardClass += ` ${styles.text}`
      break
  }

  return (
    <button className={cardClass} onClick={onClick} type={type} {...props}>
      {isLoading ? "Loading..." : <> {children}</>}
    </button>
  )
}
