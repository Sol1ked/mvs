import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  useLazyCurrentUserQuery,
  useRegisterMutation,
} from "../../app/services/userApi"
import { AuthForm } from "../../components/auth-form"
import { Button } from "../../components/button"
import { ErrorMessage } from "../../components/error-message"
import { Input } from "../../components/input"
import { hasErrorField } from "../../utils/has-error-field"

type Register = {
  name: string
  login: string
  email: string
  password: string
  password_confirmation: string
}

export const Register = () => {
  const [error, setError] = useState<string>("")
  const [formData, setFormData] = useState<Register>({
    name: "",
    login: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()
  const [triggerCurrentQuery] = useLazyCurrentUserQuery()

  const onSubmit = async () => {
    try {
      await register(formData).unwrap()
      await triggerCurrentQuery().unwrap()
      navigate("/")
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.message)
      }
    }
  }
  return (
    <>
      <AuthForm onSubmit={onSubmit}>
        <Input
          type="name"
          placeholder="ФИО"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <Input
          type="name"
          placeholder="Логин"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, login: e.target.value })
          }
        />
        <Input
          type="email"
          placeholder="Почта"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <Input
          type="name"
          placeholder="Пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Input
          type="name"
          placeholder="Подтвердите пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, password_confirmation: e.target.value })
          }
        />
        <ErrorMessage text={error} />
        <Button isLoading={isLoading} type="submit" typeButton="full">
          Регистрация
        </Button>
      </AuthForm>
    </>
  )
}
