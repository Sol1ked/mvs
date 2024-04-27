import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  useLazyCurrentUserQuery,
  useLoginMutation,
} from "../../app/services/userApi"
import { AuthForm } from "../../components/auth-form"
import { Button } from "../../components/button"
import { ErrorMessage } from "../../components/error-message"
import { Input } from "../../components/input"
import { hasErrorField } from "../../utils/has-error-field"

type Login = {
  login: string
  password: string
}

export const Login = () => {
  const [error, setError] = useState<string>("")
  const [formData, setFormData] = useState<Login>({
    login: "",
    password: "",
  })

  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const [triggerCurrentQuery] = useLazyCurrentUserQuery()

  const onSubmit = async () => {
    try {
      await login(formData).unwrap()
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
          placeholder="Логин"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, login: e.target.value })
          }
        />
        <Input
          type="name"
          placeholder="Пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <ErrorMessage text={error} />
        <Button isLoading={isLoading} type="submit" typeButton="full">
          Войти
        </Button>
      </AuthForm>
    </>
  )
}
