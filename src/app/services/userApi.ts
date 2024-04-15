import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<{ login: string }, { password: string }>({
      query: userData => (
        console.log(userData),
        {
          url: "/login",
          method: "POST",
          body: userData,
        }
      ),
    }),
    currentUser: builder.query<void, void>({
      query: userData => ({
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
