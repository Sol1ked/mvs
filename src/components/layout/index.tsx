import { Header } from "../header"
import { Container } from "../container"
import { Outlet } from "react-router-dom"
import { Menu } from "../menu"

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
