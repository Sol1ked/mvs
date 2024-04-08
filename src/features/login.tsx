import React, { useEffect } from "react"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { AuthForm } from "../components/auth-form"
import { useLoginMutation } from "../app/services/userApi"
import axios from "../app/services/axios.settings"

type Login = {
  email: string
  password: string
}

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation()
  

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AuthForm onSubmit={onSubmit}>
        <Input type={"name"} placeholder={"Логин"} />
        <Input type={"name"} placeholder={"Пароль"} />
        <Button type="submit" typeButton="full">
          Войти
        </Button>
      </AuthForm>
    </>
  )
}
