import React from "react"
import { ForecastListLabels } from "./ForecastListLabels"
import { ForecastListValues } from "./ForecastListValues"
import styles from "../../styles/modules/forecastList.module.css"

export const ForecastList: React.FC = () => {
     return (
          <ul className={styles.majorList}>
               <ForecastListLabels />
               <ForecastListValues />
          </ul>
     )
}