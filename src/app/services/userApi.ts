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
  }),
})
export const { useLoginMutation } = userApi

export const {
  endpoints: { login },
} = userApi
