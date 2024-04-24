import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import { selectIsAuthenticated } from "../../features/user/userSlice"
import { Button } from "../button"
import { Menu } from "../menu"
import { Profile } from "../profile"
import "./index.scss"

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Menu />
        <div className="header__auth">
          {isAuthenticated ? (
            <div className="header__profile">
              <Profile />
            </div>
          ) : (
            <Link to="/auth">
              <Button typeButton={"full"} type={"submit"}>
                Войти
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
