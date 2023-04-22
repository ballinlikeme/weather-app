import React from 'react'
import { Header } from './components/Header/Header'
import { Forecast } from "./components/Forecast/Forecast"
import { RadioButton } from './components/RadioButton/RadioButton'

export const App: React.FC = () => {

  return (
    <div className='wrapper'>
      <Header />
      <Forecast />
    </div>
  )
}
