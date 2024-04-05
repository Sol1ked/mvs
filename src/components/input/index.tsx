import styles from "./index.module.scss"

type Props = {
  type: string
  placeholder: string
}

export const Input: React.FC<Props> = ({ type, placeholder, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className={styles.input}
    />
  )
}
