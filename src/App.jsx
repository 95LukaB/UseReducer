import UseReducer from './components/useReducer'
import UseReducerTwo from './components/UseReducerTwo'
import './App.css'
import { useCounterStore } from "./hooks/useStore"

function App() {
  
  const {counter, inc} =useCounterStore()

  return (
    <>
     <button onClick={inc}>+</button>
     <p>{counter}</p>
    </>
  )
}

export default App
