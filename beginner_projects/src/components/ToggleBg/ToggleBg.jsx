import React, { useState } from 'react'
import './ToggleBg.css'

const ToggleBg = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, SetTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    const handleClick = () => {
        setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        SetTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
    }


  return (
    <div style={{backgroundColor, color:textColor}}>
        <button onClick={handleClick}
        style={{buttonStyle,color:textColor, border:`2px solid ${textColor}`}}
        
        >
        {backgroundColor == '#1b1b1b' ? 'Black Theme' : 'White Theme'}
        </button>

        <section className="content">
            <h1>Welcome To A <br/> Real World...</h1>
        </section>



    </div>
  )
}

export default ToggleBg 