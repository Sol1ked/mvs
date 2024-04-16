import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<{ login: string }, { password: string }>({
      query: userData => (
        {
          url: "/login",
          method: "POST",
          body: userData,
        }
      ),
    }),
    currentUser: builder.query<void, void>({
      query: () => ({
        url: "/api/v1/profile",
        method: "GET",
      }),
    }),
    movies: builder.query<void, void>({
      query: () => ({
        url: "/api/v1/films",
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
  useLazyMoviesQuery
} = userApi

export const {
  endpoints: { login, currentUser, logoutUser },
} = userApi
