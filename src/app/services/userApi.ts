import { User } from "../types"
import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<{ login: string }, { password: string }>({
      query: userData => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<
      {
        name: string
        login: string
        email: string
        password: string
        password_confirmation: string
      },
      {
        name: string
        login: string
        email: string
        password: string
        password_confirmation: string
      }
    >({
      query: userData => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),

    currentUser: builder.query<User, void>({
      query: () => ({
        url: "/api/v1/profile",
        method: "GET",
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "DELETE",
      }),
    }),
  }),
})
export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentUserQuery,
  useLazyCurrentUserQuery,
  useLogoutUserMutation,
} = userApi

export const {
  endpoints: { login, register, currentUser, logoutUser },
} = userApi
