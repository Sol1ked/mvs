import React, { useEffect } from "react"
import { useCurrentUserQuery } from "../../app/services/userApi"
import { setUser } from "./userSlice"
import { useDispatch } from "react-redux"

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch()
  const { data: currentUser, isLoading } = useCurrentUserQuery()

  useEffect(() => {
    if (currentUser) {
      dispatch(setUser(currentUser))
    }
  }, [currentUser, dispatch])

  if (isLoading) {
    return <>Loading...</>
  }

  return children
}
