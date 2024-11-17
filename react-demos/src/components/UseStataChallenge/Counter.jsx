import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }

    // const decrement = () => {
    //     if(count > 0){
    //         setCount(count - 1);
    //     }
       
    // };

  return (
    <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment the value</button>

        <button onClick={() => setCount(count  - 1)}>increment the value</button>

    </div>
  )
}

export default Counter;