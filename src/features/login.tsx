import React, { useEffect, useState } from "react"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { AuthForm } from "../components/auth-form"
import { useLoginMutation } from "../app/services/userApi"
import { hasErrorField } from "../utils/has-error-field"
import { ErrorMessage } from "../components/error-message"

type Login = {
  target: any
  email: string
  password: string
}

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation()
  const [error, setError] = useState<string>("")

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap()
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.message)
      }
    }
  }

  return (
    <>
      <AuthForm onSubmit={onSubmit}>
        <Input type={"name"} placeholder={"Логин"} />
        <Input type={"name"} placeholder={"Пароль"} />
        <ErrorMessage text={error} />
        <Button isLoading={isLoading} type="submit" typeButton="full">
          Войти
        </Button>
      </AuthForm>
    </>
  )
}
