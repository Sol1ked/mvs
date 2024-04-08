import { api } from "./api"

const getCookie = (cookieName: string): string | undefined => {
  const cookieArray = document.cookie.split(";")

  for (const cookie of cookieArray) {
    let cookieString = cookie

    while (cookieString.charAt(0) == " ") {
      cookieString = cookieString.substring(1, cookieString.length)
    }

    if (cookieString.indexOf(cookieName + "=") == 0) {
      let result = cookieString
        .substring(cookieName.length + 1, cookieString.length)
        .slice(0, -3)
        .concat("=")

      return result
    }
  }

  return undefined
}
const token = getCookie("XSRF-TOKEN")

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<{ login: string }, { password: string }>({
      query: userData => ({
        headers: {
          "X-XSRF-TOKEN": token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        url: "/login",
        method: "POST",
        body: userData,
        credentials: "include",
      }),
    }),
  }),
})
export const { useLoginMutation } = userApi

export const {
  endpoints: { login },
} = userApi
