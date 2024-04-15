import React, { useEffect, useState } from "react"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { AuthForm } from "../../components/auth-form"
import {
  useLoginMutation,
  useLogoutUserMutation,
} from "../../app/services/userApi"
import { hasErrorField } from "../../utils/has-error-field"
import { ErrorMessage } from "../../components/error-message"
import { BASE_URL } from "../../constants"
import { SessionRestore } from "../../utils/session-restore"

type Login = {
  login: string
  password: string
}

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation()
  const [logout] = useLogoutUserMutation()
  const [error, setError] = useState<string>("")
  const [formData, setFormData] = useState<Login>({
    login: "",
    password: "",
  })

  const onSubmit = async () => {
    try {
      await login(formData).unwrap()
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
