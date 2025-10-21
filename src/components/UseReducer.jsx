import { useReducer } from "react"


const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    TOOGLE_DARK_MODE: 'toogleDarkMode',
    CHANGE_INPUT: 'changeInput'
}


function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return {counter: state.counter + 1}
        case 'decrement':
            return {counter: state.counter - 1}
        case ACTIONS.RESET:
            return {counter: state.coutner = 0}
        case ACTIONS.TOOGLE_DARK_MODE:
            return {isDarkMode: !state.isDarkMode}
        case ACTIONS.CHANGE_INPUT:
            return {inputValue: action.payload}
        default:
            return state
    }
}


// const action = {type: 'increment'};

const UseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, {counter: 0, isDarkMode: false, inputValue: ""})

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
    </>
) 
}

export default UseReducer