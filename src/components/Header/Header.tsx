import React from "react"
import { HeaderInput } from "./HeaderInput"
import { RadioButton } from "../RadioButton/RadioButton"
import styles from "../../styles/modules/header.module.css"

export const Header: React.FC = () => {
     return (
          <header className={styles.header}>
               <HeaderInput />
               <RadioButton />
          </header>
     )
}