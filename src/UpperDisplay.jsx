import './App.css'

export default function UpperDisplay({ upperDisplayNumber }) {
  return (
    <div id="upperDisplay" className="display">
      <div><h4>{upperDisplayNumber}</h4></div>
    </div>
  )
}
