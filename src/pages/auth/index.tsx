import React, { useState } from "react"
import styles from "./index.module.scss"
import { Tabs } from "../../components/tabs"
import { Tab } from "../../components/tabs/tab"
import { Login } from "../../features/login"
import { Register } from "../../features/register"

export const Auth = () => {
  const [selected, setSelected] = useState<string>("login")

  return (
    <div className={styles.auth}>
      <div className={styles.content}>
        <Tabs selected={selected} setSelected={setSelected}>
          <Tab
            name="login"
            label="Вход"
            selected={selected}
            setSelected={() => setSelected("login")}
          ></Tab>
          <Tab
            name="registration"
            label="Регистрация"
            selected={selected}
            setSelected={() => setSelected("registration")}
          />
        </Tabs>
        {selected === "login" && <Login />}
        {selected === "registration" && <Register />}
      </div>
    </div>
  )
}
