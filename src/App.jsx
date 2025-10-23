// import UseReducer from './components/useReducer'
// import UseReducerTwo from './components/UseReducerTwo'
import './App.css'
import { useCounterStore, useTodosStore } from './hooks/useStore'
import { useState } from 'react'

function App() {
  
 const {counter, inc, dec, reset} = useCounterStore()
 const {todos, addTodo} = useTodosStore()
 const [newTodo, setNewTodo] = useState()


  function handleSubmit(e) {
    e.preventDefault()
    addTodo(newTodo)
    console.log(todos);
    setNewTodo("")
    
  }

  return (
    <>
    <p>{counter}</p>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <button onClick={reset}>X</button>
     <form onSubmit={handleSubmit}>
      <input onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} type="text" placeholder="NEW TODO" />
     </form>
    </>
  )
}

export default App
