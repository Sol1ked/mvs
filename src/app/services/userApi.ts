import axios from "axios"
import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getCookies: builder.query({
      query: () => ({
        url: "/sanctum/csrf-cookie",
        method: "GET",
      }),
    }),
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: userData => ({
        url: "/login",
        method: "POST",
        body: userData,
        credentials: "include",
      }),
    }),
  }),
})
export const { useLoginMutation, useGetCookiesQuery } = userApi

export const {
  endpoints: { login, getCookies },
} = userApi
