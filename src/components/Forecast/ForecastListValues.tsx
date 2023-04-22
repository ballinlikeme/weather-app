import React, { useContext } from "react"
import { DataContext } from "../../utils/DataContext"
import { useAppSelector } from "../../hooks/redux"
import styles from "../../styles/modules/forecastList.module.css"

export const ForecastListValues: React.FC = () => {

     const { current } = useContext(DataContext)
     const isActive = useAppSelector(state => state.system.current)

     return (
          <li className={styles.majorItem}>
               <ul className={styles.minorList}>
                    <li className={styles.minorItem}>
                         {isActive
                              ? current.wind_kph
                              : current.wind_mph}
                         {current.wind_dir}
                    </li>
                    <li className={styles.minorItem}>
                         {isActive
                              ? current.pressure_in
                              : current.pressure_mb
                         }
                    </li>
                    <li className={styles.minorItem}>{current.humidity}</li>
                    <li className={styles.minorItem}>
                         {isActive
                              ? current.gust_kph
                              : current.gust_mph
                         }
                    </li>
               </ul>
          </li>
     )
}