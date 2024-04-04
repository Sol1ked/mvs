import React, { useState } from "react"
import styles from "./index.module.scss"
import { AuthForm } from "../../components/auth-form"
import { Tabs } from "../../components/tabs"
import { Tab } from "../../components/tabs/tab"

export const Auth = () => {
  const [selected, setSelected] = useState<string>("login")

  return (
    <div className={styles.auth}>
      <Tabs selected={selected} setSelected={setSelected}>
        <Tab
          name="Регистрация"
          label={"registration"}
          selected={selected}
          onClick={() => setSelected}
        >
          <h1>Рег</h1>
        </Tab>
        <Tab
          name="Вход"
          label={"login"}
          selected={selected}
          onClick={() => setSelected}
        >
          <h1>Вход</h1>
        </Tab>
      </Tabs>
    </div>
  )
}
