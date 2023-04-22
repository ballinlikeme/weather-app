import React, { PropsWithChildren } from "react"
import styles from "../styles/modules/stateWrapper.module.css"

export const StateWrapper: React.FC<PropsWithChildren> = ({ children }) => {
     return (
          <div className={styles.wrapper}>
               {children}
          </div>
     )
}