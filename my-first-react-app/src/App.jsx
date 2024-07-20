import { useState } from 'react'
import './App.css'
import Pizza from './Pizza'

function App() {
  const [count, setCount] = useState(0)
  let dynamicName = 'React is mind blowing'
  let brand = "PizzaHut"
  let description = "Best pizza in town"

  return (
    <>
      <div className='App'>
        <h1>{dynamicName}</h1>
        <Pizza brand= {brand} description={description}></Pizza>
      </div>
    </>
  )
}

export default App
