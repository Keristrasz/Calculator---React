import './App.css'
import Buttons from './Buttons.jsx'
import LowerDisplay from './LowerDisplay.jsx'
import UpperDisplay from './UpperDisplay.jsx'
import React from 'react'


export default function App() {

  const [lowerDisplayNumber, setLowerDisplayNumber] = React.useState(0);
  const [upperDisplayNumber, setUpperDisplayNumber] = React.useState("");
  const [realCalculation, setRealCalculation] = React.useState(0);


  return (
    <main>
      <UpperDisplay upperDisplayNumber={upperDisplayNumber} realCalculation={realCalculation} />
      <LowerDisplay lowerDisplayNumber={lowerDisplayNumber} />
      <Buttons upperDisplayNumber={upperDisplayNumber} lowerDisplayNumber={lowerDisplayNumber} setLowerDisplayNumber={setLowerDisplayNumber} setUpperDisplayNumber={setUpperDisplayNumber} realCalculation={realCalculation} setRealCalculation={setRealCalculation} />
    </main>
  )
}
