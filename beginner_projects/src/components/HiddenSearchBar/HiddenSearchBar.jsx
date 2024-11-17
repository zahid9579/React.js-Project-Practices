import React, { useState } from 'react'
import './HiddenSearchBar.css'
import {FaSearch} from "react-icons/fa";

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, seBgColor] = useState('white');
    

    const handleClick = (e) => {
        seBgColor('#1a1a1a')

        if(e.target.className === "container") {
            setShowInput(false);
            seBgColor('#fff');
        }
    }
    

  return (
    <section className='container' style={{backgroundColor: bgColor}
    } onClick={handleClick}> {showInput ? (
        <input type='text' placeholder='Search...'/>
    ) : (
        <FaSearch onClick={() => setShowInput(true)}/>
    
    )}  </section>
  )
}

export default HiddenSearchBar