import styles from "./index.module.scss"

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
