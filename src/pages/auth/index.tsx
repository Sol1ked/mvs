import { useState } from "react"
import { Tabs } from "../../components/tabs"
import { Tab } from "../../components/tabs/tab"
import { Login } from "../../features/user/login"
import { Register } from "../../features/user/register"
import styles from "./index.module.scss"

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
