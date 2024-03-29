import { Header } from "../components/header"
import { Container } from "../components/container"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
