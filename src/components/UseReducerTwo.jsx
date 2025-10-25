import { useReducer, useState } from "react";


function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1}
        case 'decrement':
            return {...state, counter: state.counter - 1}
        case 'reset':
            return {...state, counter: 0}
        case 'addTodo':
        return {...state, todos: [...state.todos, {id: Date.now(), text: action.payload}]}
        case 'darkMode':
            return {...state, darkMode: !state.darkMode}
        case 'inputValue':
        return {...state, inputValue: action.payload}
        default:
            return state    
    }
}



const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    ADDTODO: 'addTodo',
    DARKMODE: 'darkMode',
    INPUTVALUE: 'inputValue'
}

const UseReducerTwo = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0, todos: [], darkMode: false, inputValue: ""})
    const [newTodo, setNewTodo] = useState('')
    
    

function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: ACTIONS.ADDTODO, payload: newTodo})
    setNewTodo("")
}




return (
    <>
        <p>{state.counter}</p>
        <button onClick={()=>dispatch({type: ACTIONS.INCREMENT })}>+</button>
        <button onClick={()=>dispatch({type: ACTIONS.DECREMENT})}>-</button>
        <button onClick={()=>dispatch({type: ACTIONS.RESET})}>X</button>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Upisi novi todo..." value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
        </form>
        <button onClick={()=>dispatch({type: ACTIONS.DARKMODE})}>Dark Mode</button>
        {state.darkMode && <span>Radi DarkMode</span>}
        <input type="text" value={state.inputValue} onChange={(e)=>dispatch({type: ACTIONS.INPUTVALUE, payload: e.target.value})} />
        <p>Moje ime je: {state.inputValue}</p>
    </>
)


}

export default UseReducerTwo