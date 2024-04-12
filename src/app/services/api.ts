import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../constants"
import axios from "./axios.settings"

const getCookie = async (cookieName: string): Promise<string> => {
  try {
    await axios.get("/sanctum/csrf-cookie")

    const cookieArray = document.cookie.split(";")
    for (const cookie of cookieArray) {
      let cookieString = cookie.trim()
      if (cookieString.indexOf(cookieName + "=") === 0) {
        let result = cookieString
          .substring(cookieName.length + 1, cookieString.length)
          .slice(0, -3)
          .concat("=")
        return result
      }
    }
  } catch (error) {
    console.error("Ошибка при получении CSRF-куки:", error)
  }
  return ""
}

const token = getCookie("XSRF-TOKEN")

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
  credentials: "include",
  headers: {
    "X-XSRF-TOKEN": await getCookie("XSRF-TOKEN"),
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
