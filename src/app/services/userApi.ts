import axios from "axios"
import { api } from "./api"

const COOKIE_URL = "http://localhost:8000/sanctum/csrf-cookie"

const getCookies = () => {
  return axios.get(COOKIE_URL)
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<{ login: string }, { password: string }>({
      query: userData => (
        getCookies(),
        {
          url: "/login",
          method: "POST",
          body: userData,
          credentials: "include",
        }
      ),
    }),
  }),
})
export const { useLoginMutation } = userApi

export const {
  endpoints: { login },
} = userApi
