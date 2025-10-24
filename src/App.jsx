import './App.css'
import { useCounterStore, useTodosStore } from "./zustand/useStore"
import { useState } from 'react'

function App() {
  const {counter, inc, dec, reset} = useCounterStore()
  const {todos, addTodo, deleteTodo} = useTodosStore()
  const [newTodo, setNewTodo] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo("")
  }

  console.log(todos);
  

 return (
  <>
  <p>{counter}</p>
  <button onClick={inc}>+</button>
  <button onClick={dec}>-</button>
  <button onClick={reset}>X</button>

  <form onSubmit={handleSubmit}>
    <input onChange={(e)=> setNewTodo(e.target.value)} value={newTodo} type="text" placeholder="new todo..." />
  </form>
  </>
 )
    
}

export default App
