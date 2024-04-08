import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../constants"

const getCookie = (cookieName: string): string => {
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

  return ""
}
const token = getCookie("XSRF-TOKEN")

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
  headers: {
    "X-XSRF-TOKEN": token,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  credentials: "include",
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
