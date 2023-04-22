import React from "react"
import { BiError } from "react-icons/bi"
import { StateWrapper } from "../../ui/StateWrapper"
import styles from "../../styles/modules/startState.module.css"

interface ErrorStateProps {
     message: string | undefined;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
     return (
          <StateWrapper>
               <div className={styles.container}>
                    <BiError size={120} />
                    <h1 className={styles.primary}>Oops.. Something went wrong</h1>
                    <p className={styles.secondary}>{message}</p>
               </div>
          </StateWrapper>
     )
}