import { CgProfile } from "react-icons/cg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import { selectUser } from "../../features/user/userSlice"
import { Button } from "../button"
import { Menu } from "../menu"
import "./index.scss"

export const Header = () => {
  const current = useSelector(selectUser)

  if (!current) {
    return null
  }

  const { name } = current

  const [thirdName, secondName, firstName] = name?.split(" ") || ""
  const abbreviatedName = `${firstName} ${secondName[0]}.${thirdName[0]}`

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Menu />
      <div className="header__auth">
        {current ? (
          <div className="header__profile">
            <Link to="/profile" className="header__profile-link">
              <CgProfile className="header__profile-icon" />
            </Link>
            <Link to="/logout" className="header__profile-link">
              <span className="header__profile-text">Выйти</span>
            </Link>
          </div>
        ) : (
          <Button typeButton={"full"} type={"submit"}>
            <Link to="/auth">Войти</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
