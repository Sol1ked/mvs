import React, { useEffect, useState } from "react"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { AuthForm } from "../../components/auth-form"
import {
  useLazyCurrentUserQuery,
  useLoginMutation,
  useLogoutUserMutation,
} from "../../app/services/userApi"
import { hasErrorField } from "../../utils/has-error-field"
import { ErrorMessage } from "../../components/error-message"
import { BASE_URL } from "../../constants"
import { SessionRestore } from "../../utils/session-restore"
import { useNavigate } from "react-router-dom"

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

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation()
  const [logout] = useLogoutUserMutation()
  const [triggerCurrentQuery] = useLazyCurrentUserQuery();
  
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
          type={"name"}
          placeholder={"Логин"}
          onChange={(e: any) =>
            setFormData({ ...formData, login: e.target.value })
          }
        />
        <Input
          type={"name"}
          placeholder={"Пароль"}
          onChange={(e: any) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <ErrorMessage text={error} />
        <Button isLoading={isLoading} type="submit" typeButton="full">
          Войти
        </Button>
      </AuthForm>
      <Button
        isLoading={isLoading}
        type="submit"
        onClick={async () => await logout()}
        typeButton="full"
      >
        Выйти
      </Button>
    </>
  )
}
