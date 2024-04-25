import { useDispatch } from "react-redux"
import test from "../../assets/images/test.jpg"

import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useLogoutUserMutation } from "../../app/services/userApi"
import { logout } from "../../features/user/userSlice"
import { ProfilePopup } from "../profile-popup"
import "./index.scss"

export const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
        <RiArrowDropDownLine />
      </div>
      <ProfilePopup isOpen={isOpen} handleLogout={handleLogout} />
    </div>
  )
}
