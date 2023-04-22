import React from "react"
import { ForecastList } from "./ForecastList";
import { ForecastLocation } from "./ForecastLocation";
import { useGetWeatherByLocationQuery } from "../../api";
import { DataContext } from "../../utils/DataContext"
import { useAppSelector } from "../../hooks/redux";
import { StartState } from "../States/StartState";
import { ErrorState } from "../States/ErrorState";
import styles from "../../styles/modules/forecast.module.css"

export const Forecast: React.FC = () => {

     const { inputValue } = useAppSelector(state => state.input)

     const { data, isError, error } = useGetWeatherByLocationQuery(inputValue)

     if (isError && 'code' in error && 'message' in error) {
          if (Number(error.code) === 1003) {
               return <StartState />
          }
          return <ErrorState message={error.message} />
     }

     if (data) {
          return (
               <main className={styles.main}>
                    <div className={styles.container}>
                         <DataContext.Provider value={data}>
                              <ForecastLocation />
                              <ForecastList />
                         </DataContext.Provider>
                    </div>
               </main>
          )
     }

     return <StartState />
}