import './App.css'
import Buttons from './Buttons.jsx'
import LowerDisplay from './LowerDisplay.jsx'
import UpperDisplay from './UpperDisplay.jsx'
import React from 'react'


export default function App() {

const [lowerDisplayNumber, setLowerDisplayNumber] = React.useState(5);
const [upperDisplayNumber, setUpperDisplayNumber] = React.useState(6);

  
  return (
    <main>
      <UpperDisplay upperDisplayNumber={upperDisplayNumber} />
      <LowerDisplay lowerDisplayNumber={lowerDisplayNumber} />
      <Buttons upperDisplayNumber={upperDisplayNumber} lowerDisplayNumber={lowerDisplayNumber} setLowerDisplayNumber={setLowerDisplayNumber} setUpperDisplayNumber={setUpperDisplayNumber} />
    </main>
  )
}
