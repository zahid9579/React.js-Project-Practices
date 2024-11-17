import React from 'react'
import { useReducer, useState } from 'react';
import { couterReducer, initialState } from './counterReducer';

const Counter = () => {
    const [state, dispatch] = useReducer(couterReducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({type: "increment"});
    const handleDecrement = () => dispatch({type: "decrement"});

    const handleIncrementByAmount = () => {
        dispatch({type: "incrementByAmount", payload: +inputValue});
        setInputValue(0);
    };

    const handleDecrementByAmount = () => {
        dispatch({type: "decrementByAmount", payload: +inputValue});
        setInputValue(0);
    };


  return (
    <>
    <div>
        <h1>Count: {state.count} </h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
    <div>
        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
       
        
       

    </div>
    </>
  )
}

export default Counter;