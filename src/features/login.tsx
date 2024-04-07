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
  // useEffect(() => {
  //   fetch("/sanctum/csrf-cookie")
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(error => {
  //       console.error("Failed to fetch COOKIE_URL", error)
  //     })
  // }, [])
  useEffect(() => {
    axios
      .get("/sanctum/csrf-cookie")
      .then(() => {
        axios
          .post("/login", {
            login: "molestias",
            password: "password",
          })
          .then(response => {
            console.log("Login successful", response.data)
          })
          .catch(error => {
            console.error("Login failed", error)
          })
      })
      .catch(error => {
        console.error("Failed to fetch COOKIE_URL", error)
      })
  }, [])
  // useEffect(() => {
  //   fetch(COOKIE_URL)
  //     .then(() => {
  //       axios
  //         .delete("/logout")
  //         .then(response => {
  //           console.log("Login successful", response.data)
  //         })
  //         .catch(error => {
  //           console.error("Login failed", error)
  //         })
  //     })
  //     .catch(error => {
  //       console.error("Failed to fetch COOKIE_URL", error)
  //     })
  // }, [])
  // const [login, { isLoading }] = useLoginMutation()
  // const onSubmit = async (data: any) => {
  //   try {
  //     await fetch(COOKIE_URL).then(async () => await login(data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleSubmit = (e: any, data: any) => {
  //   e.preventDefault()
  //   onSubmit(data)
  // }

  return (
    <>
      {/* <form
        onSubmit={e =>
          handleSubmit(e, {
            email: "example@example.com",
            password: "password",
          })
        }
      >
        <input type="text" />
        <input type="text" />
        <button type="submit">Вход</button>
      </form> */}
    </>
    // <AuthForm onSubmit={onSubmit}>
    //   <Input type={"name"} placeholder={"Логин"} />
    //   <Input type={"name"} placeholder={"Пароль"} />
    //   <Button type="submit" typeButton="full">
    //     Войти
    //   </Button>
    // </AuthForm>
  )
}
