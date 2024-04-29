import { useState } from "react"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import "./index.scss"

type Props = {
  type: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FC<Props> = ({ type, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className="input">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
        className="input__field"
      />
      {type === "password" && (
        <div
          className="input__icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </div>
      )}
    </div>
  )
}
