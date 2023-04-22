import React from "react"
import { useAppSelector } from "../../hooks/redux"
import styles from "../../styles/modules/forecastList.module.css"

export const ForecastListLabels: React.FC = () => {

     const isActive = useAppSelector(state => state.system.current)

     return (
          <li className={styles.majorItem}>
               <ul className={styles.minorList}>
                    <li className={styles.minorItem}>Wind {isActive
                         ? "(km/ph)"
                         : "(m/ph)"
                    }
                    </li>
                    <li className={styles.minorItem}>Pressure
                         {isActive
                              ? "(in)"
                              : "(mb)"
                         }
                    </li>
                    <li className={styles.minorItem}>Humidity (%)</li>
                    <li className={styles.minorItem}>Gust
                         {isActive
                              ? "(km/ph)"
                              : "(m/ph)"
                         }
                    </li>
               </ul>
          </li>
     )
}