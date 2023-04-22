import React from "react"
import { TiWeatherCloudy } from "react-icons/ti"
import { StateWrapper } from "../../ui/StateWrapper"
import styles from "../../styles/modules/startState.module.css"

export const StartState: React.FC = () => {

     return (
          <StateWrapper>
               <div className={styles.container}>
                    <TiWeatherCloudy size={120} />
                    <h1 className={styles.primary}>Welcome to the weather application!</h1>
                    <h2 className={styles.secondary}>Start with searching for location!</h2>
               </div>
          </StateWrapper>
     )
}