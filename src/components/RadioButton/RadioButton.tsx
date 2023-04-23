import React from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { changeSystem } from "../../store/slices/systemSlice"
import styles from "../../styles/modules/radioButton.module.css"

export const RadioButton: React.FC = () => {

     const dispatch = useAppDispatch()
     const isActive = useAppSelector(state => state.system.current)

     const handleClick = () => {
          dispatch(changeSystem())
     }

     return (
          <div className={styles.radio} onClick={() => handleClick()}>
               <div className={styles.body}>
                    <div className={styles.value}>Emperical</div>
                    <div className={
                         isActive
                              ? `${styles.circle} ${styles.active}`
                              : `${styles.circle}`
                    }></div>
                    <div className={styles.value}>Metric</div>
               </div>
          </div>
     )
}