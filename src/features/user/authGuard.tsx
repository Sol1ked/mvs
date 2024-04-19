import React, { useEffect } from "react"
import { useCurrentUserQuery } from "../../app/services/userApi"
import { setUser } from "./userSlice"
import { useDispatch } from "react-redux"

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const {isLoading} = useCurrentUserQuery()

  if (isLoading) {
    return <>Loading...</>
  }

  return children
}
