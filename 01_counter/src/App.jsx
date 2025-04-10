import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  // let counter = 15;
  const addValue = () =>{
    if(counter==20) return;
    setCount(counter+1)
  }
  const decrementValue = () =>{
    if(counter==0) return;
    setCount(counter-1)
  }
  return (
    <>
      <h1>Divyank Srivastava</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addValue}>Increment value</button>
      <button onClick = {decrementValue}>Decrement value</button>
    </>
  )
}

export default App
