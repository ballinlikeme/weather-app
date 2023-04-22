import React, { useContext } from "react"
import { DataContext } from "../../utils/DataContext"
import { useAppSelector } from "../../hooks/redux"
import styles from "../../styles/modules/forecast.module.css"

export const ForecastLocation: React.FC = () => {

     const { current, location } = useContext(DataContext)
     const isActive = useAppSelector(state => state.system.current)

     return (
          <ul className={styles.list}>
               <li className={styles.item}>
                    <h3>{location.name}, {location.country}</h3>
               </li>
               <li className={styles.icon}>
                    <img src={current.condition.icon} alt={current.condition.text} />
               </li>
               <li className={styles.temp}>
                    <h2>{isActive
                         ? `${current.temp_c}° C`
                         : `${current.temp_f}° F`}
                    </h2>
               </li>
               <li className={styles.text}>
                    <p>{current.condition.text}</p>
               </li>
          </ul>
     )
}