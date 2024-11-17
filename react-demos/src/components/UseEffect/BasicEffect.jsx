import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() =>{
        console.log("BasicEffect component mounted");
    }, []);
  return (
    <div>Check the consloe to see the result</div>
  )
}

export default BasicEffect;