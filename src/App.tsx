import React from 'react'
import { Header } from './components/Header/Header'
import { Forecast } from "./components/Forecast/Forecast"

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Forecast />
    </div>
  )
}

export default App;