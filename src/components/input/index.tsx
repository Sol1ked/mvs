import styles from "./index.module.scss"

type Props = {
  type: string
  placeholder: string
  onChange: any
}

export const Input: React.FC<Props> = ({
  type,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  )
}
