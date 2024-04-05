import React from "react"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { AuthForm } from "../components/auth-form"

export const Login = () => {
  return (
    <AuthForm>
      <Input type={"name"} placeholder={"Логин"} />
      <Input type={"name"} placeholder={"Пароль"} />
      <Button typeButton={"full"}>Войти</Button>
    </AuthForm>
  )
}
