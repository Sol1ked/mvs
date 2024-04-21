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
  useCurrentUserQuery,
  useLazyCurrentUserQuery,
  useLogoutUserMutation,
} = userApi

export const {
  endpoints: { login, currentUser, logoutUser },
} = userApi
