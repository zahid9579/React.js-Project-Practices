import React from 'react'
import { Data, Data1 } from '../ContextApi/BasicContextApi'
import { useContext } from 'react'

const ComponentC = () => {
  const userName = useContext(Data)
  const age = useContext(Data1)
    
  return (
      <h1> My name is: {userName} and I am {age} years old..</h1>
  )
}

export default ComponentC;