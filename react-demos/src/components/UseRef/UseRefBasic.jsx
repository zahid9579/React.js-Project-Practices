import React from 'react'
import { useRef } from 'react'

const UseRefBasic = () => { 
    const inputElement = useRef(null);
    console.log(inputElement)
    const focusInput = () => {
        inputElement.current.focus();
    }

  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={() => focusInput()}> Focus & Write Huxn</button>
    </div>
  )
}

export default UseRefBasic