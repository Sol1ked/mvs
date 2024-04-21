import { useCurrentUserQuery } from "../../app/services/userApi"

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentUserQuery()

  if (isLoading) {
    return <>Loading...</>
  }

  return children
}
