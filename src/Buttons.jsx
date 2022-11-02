import './App.css'
import {numbersForState} from './numbersForState.js'

export default function Buttons( {lowerDisplayNumber, setLowerDisplayNumber, setUpperDisplayNumber, upperDisplayNumber} ) {
  return (
  
    <div id="buttonGrid">
      <button className="myButtons  notNumbers" id="clear" >AC</button>
      <button className="myButtons  notNumbers" id="divide">/</button>
      <button className="myButtons  notNumbers" id="multiply">*</button>
      <button className="myButtons  notNumbers" id="subtract">-</button>
      <button className="myButtons numbers" id="seven">7</button>
      <button className="myButtons numbers" id="eight">8</button>
      <button className="myButtons numbers" id="nine">9</button>
      <button className="myButtons  notNumbers" id="add">+</button>
      <button className="myButtons numbers " id="four">4</button>
      <button className="myButtons numbers " id="five">5</button>
      <button className="myButtons numbers " id="six">6</button>
      <button className="myButtons numbers " id="one">1</button>
      <button className="myButtons numbers " id="two">2</button>
      <button className="myButtons numbers " id="three">3</button>
      <button className="myButtons  notNumbers" id="equals">=</button>
      <button className="myButtons numbers " id="zero">0</button>
      <button className="myButtons  numbers" id="decimal">.</button>
   
    </div>
  )
}
