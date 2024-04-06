import axios from "axios"
import { api } from "./api"

const COOKIE_URL = "http://localhost:8000/sanctum/csrf-cookie"

const getCookies = () => {
  return axios.get(COOKIE_URL)
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: userData => (
        getCookies(),
        {
          url: "/login",
          method: "POST",
          body: userData,
        }
      ),
    }),
  }),
})
export const { useLoginMutation } = userApi // Перемещение импорта сюда

export const {
  endpoints: { login },
} = userApi
