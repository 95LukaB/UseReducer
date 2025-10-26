import "./App.css";
// import { useCounterStore, useTodosStore } from "./zustand/useStore";
// import { useState } from "react";
import UseReducerTwo from "./components/UseReducerTwo";
import UseReducer from "./components/UseReducer";
import useFetch from "./components/hooks/useFetch";

function App() {
  // const { counter, inc, dec, reset } = useCounterStore();
  // const {todos, addTodo, deleteTodo} = useTodosStore()
  // const [newTodo, setNewTodo] = useState()
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   addTodo(newTodo)
  //   setNewTodo("")
  // }
  const url = "https://jsonplaceholder.typicode.com/users"
  const {items, loading, error} = useFetch(url)
  
  

 
  return (
    <>
      {/* <p>{counter}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>X</button>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setNewTodo(e.target.value)} value={newTodo} type="text" placeholder="NEW TODO..." />
      </form>
      <ul>
        {todos.map(todo=> <li key={todo.id}>{todo.text} <button onClick={()=> deleteTodo(todo.id)} >X</button></li>)}
      </ul> */}

      {/* <UseReducerTwo/> */}
      
      
    </>
  );
}

export default App;
