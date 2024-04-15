import React from "react"
import { Button } from "../../components/button"
import styles from "./index.module.scss"
import { Input } from "../../components/input"
import { AuthForm } from "../../components/auth-form"

export const Register = () => {
  return (
    <AuthForm onSubmit={undefined}>
      <Input type={"name"} placeholder={"ФИО"} />
      <Input type={"name"} placeholder={"Логин"} />
      <Input type={"name"} placeholder={"Почта"} />
      <Input type={"name"} placeholder={"Пароль"} />
      <Input type={"name"} placeholder={"Подтвердите пароль"} />
      <Button typeButton={"full"} isLoading={false} type={"submit"}>
        Регистрация
      </Button>
    </AuthForm>
  )
}
