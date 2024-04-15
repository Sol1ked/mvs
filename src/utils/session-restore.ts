import { useDispatch } from "react-redux"
import { useCurrentUserQuery } from "../app/services/userApi"
import { useEffect } from "react"
import { setUser } from "../features/user/userSlice"

export const SessionRestore = () => {
  const dispatch = useDispatch()
  const { data: currentUser, isError } = useCurrentUserQuery()

  useEffect(() => {
    if (currentUser) {
      dispatch(setUser(currentUser))
    }
  }, [currentUser, dispatch])

  return () => {}
}
