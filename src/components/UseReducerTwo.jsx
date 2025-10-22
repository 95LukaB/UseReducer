import { useReducer, useState } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    INPUT_CHANGE: 'inputChange',
    DARK_MODE: 'darkMode',
    NEW_TODO: 'newTodo'

}


function reducer ( state, action ) {
    switch (action.type){
        case 'increment':
            return {...state, counter: state.counter + 1 }
        case ACTIONS.DECREMENT:
            return {...state, counter: state.counter - 1}
        case ACTIONS.INPUT_CHANGE:
            return {...state, inputValue: action.payload}
        case ACTIONS.DARK_MODE:
            return {...state, darkMode: !state.darkMode}
        case ACTIONS.NEW_TODO:
            return {...state, todos:[...state.todos, action.payload]}
        default:
            return state
    }
}




const UseReducerTwo = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0, inputValue: "", darkMode: false, todos: []})
    const [newTodo, setNewTodo] = useState('')

    const fixedTodo = {
        id: Date.now(),
        text: newTodo
    }

    function handleSubmit (e) {
        e.preventDefault()
        dispatch({type: ACTIONS.NEW_TODO, payload: fixedTodo})
        setNewTodo("")
    }
    

    return (
        <>
            <button onClick={()=>dispatch({type: ACTIONS.INCREMENT})}>+</button>
            <p>Counter is {state.counter}</p>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <br/>
            <br/>
            <input onChange={(e)=>dispatch({type: ACTIONS.INPUT_CHANGE, payload: e.target.value})} value={state.inputValue}  type="text" placeholder="Your name" />
            <p>Tvoje ime je: {state.inputValue}</p>
            <button onClick={()=>dispatch({type: ACTIONS.DARK_MODE})}>Dark Mode</button>
            {state.darkMode && <span>Radi bre</span>}
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} type="text" placeholder="NEW TODO" />
            </form>
        </>
    )

}

export default UseReducerTwo