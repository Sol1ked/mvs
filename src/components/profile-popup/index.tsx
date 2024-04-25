import { CgProfile } from "react-icons/cg"
import { IoIosLogOut } from "react-icons/io"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectCurrent } from "../../features/user/userSlice"
import "./index.scss"

type Props = {
  isOpen: boolean
  handleLogout: () => void
}

export const ProfilePopup: React.FC<Props> = ({ isOpen, handleLogout }) => {
  const user = useSelector(selectCurrent)
  return (
    <div
      className={`${isOpen ? "profile-popup profile-popup_active" : "profile-popup"}`}
    >
      <Link to="/profile" className="profile-popup__link">
        <CgProfile />
        <p className="profile-popup__text">Профиль</p>
      </Link>
      <Link
        to=""
        onClick={() => handleLogout()}
        className="profile-popup__link"
      >
        <IoIosLogOut />
        <p className="profile-popup__text">Выйти</p>
      </Link>
    </div>
  )
}
