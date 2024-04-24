import { useDispatch, useSelector } from "react-redux"
import test from "../../assets/images/test.jpg"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLogoutUserMutation } from "../../app/services/userApi"
import { logout, selectCurrent } from "../../features/user/userSlice"
import "./index.scss"

export const Profile = () => {
  const user = useSelector(selectCurrent)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const [userLogout] = useLogoutUserMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    userLogout()
    navigate("/auth")
  }

  return (
    <div className="profile" onClick={() => setIsOpen(!isOpen)}>
      <div className="profile__content">
        <img className="profile__image" src={test} alt="profile-image" />
        <h3 className="profile__title">{user?.login}</h3>
      </div>
      <div
        className={`${isOpen ? "profile__menu profile__menu_active" : "profile__menu"}`}
      >
        <p className="profile__menu-text">{user?.name}</p>
        <Link to="/profile" className="profile__menu-link">
          <p className="profile__menu-text">Профиль</p>
        </Link>
        <Link
          to=""
          onClick={() => handleLogout()}
          className="profile__menu-link"
        >
          <p className="profile__menu-text">Выйти</p>
        </Link>
      </div>
    </div>
  )
}
