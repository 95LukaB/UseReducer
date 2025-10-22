import { useReducer, useState } from "react"


const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    TOOGLE_DARK_MODE: 'toogleDarkMode',
    CHANGE_INPUT: 'changeInput',
    NEW_TODO: 'newTodo'
      
}


function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1}
        case 'decrement':
            return {...state, counter: state.counter - 1}
        case ACTIONS.RESET:
            return {...state, counter: 0} // nova vrednost, a ne menjamo staru
        case ACTIONS.TOOGLE_DARK_MODE:
            return {...state, isDarkMode: !state.isDarkMode}
        case ACTIONS.CHANGE_INPUT:
            return {...state, inputValue: action.payload}
        case ACTIONS.NEW_TODO:
            return {...state, todos: [...state.todos, {id: Date.now(), text: action.payload}]}
        default:
            return state
    }
}


// const action = {type: 'increment'};

const UseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, {counter: 0, isDarkMode: false, inputValue: "", todos: []})
    const [newTodo, setNewTodo] = useState("")

    function handleSumbit (e) {
        e.preventDefault()
        dispatch({type: ACTIONS.NEW_TODO, payload: newTodo})
        setNewTodo("")
    }

 

return (
    <>
        <button onClick={()=>dispatch({type: 'increment'})}>+</button>
        <p>Vrednost counter-a je {state.counter}</p>
        <button onClick={()=>dispatch({type: ACTIONS.DECREMENT})}>-</button>
        <br/>
        <br/>
        <button onClick={()=>dispatch({type: ACTIONS.RESET})}>Reset</button>
        <br/>
        <button onClick={()=>dispatch({type: ACTIONS.TOOGLE_DARK_MODE})}>Toogle dark mode</button>
        {state.isDarkMode && <span>Poy</span>}
        <br/>
        <input onChange={(e)=>dispatch({type: ACTIONS.CHANGE_INPUT, payload: e.target.value})}  value={state.inputValue} type="text" placeholder="Your full-name"/>
        <p>Your name is: {state.inputValue}</p>
        <form onSubmit={handleSumbit}>
            <input onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} type="text" placeholder="NEW TODO" />
        </form>
        <div>
            <p>Lista:</p>
            <ul>
                {state.todos.map(todo=> <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </div>
        
    </>
) 
}

export default UseReducer