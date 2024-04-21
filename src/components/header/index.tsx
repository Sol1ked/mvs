import { CgProfile } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useLogoutUserMutation } from "../../app/services/userApi"
import logo from "../../assets/images/logo.svg"
import { logout, selectIsAuthenticated } from "../../features/user/userSlice"
import { Button } from "../button"
import { Menu } from "../menu"
import "./index.scss"

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const [userLogout] = useLogoutUserMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    userLogout()
    navigate("/auth")
  }

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Menu />
      <div className="header__auth">
        {isAuthenticated ? (
          <div className="header__profile">
            <Link to="/profile" className="header__profile-link">
              <CgProfile className="header__profile-icon" />
            </Link>
            <Link
              to=""
              onClick={() => handleLogout()}
              className="header__profile-link"
            >
              <span className="header__profile-text">Выйти</span>
            </Link>
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
  )
}
