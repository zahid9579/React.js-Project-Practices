import React from 'react'
import { createContext } from 'react';
import ComponentA from '../ComponentDrilling/ComponentA';

export const Data = createContext();

export const Data1 = createContext();

const BasicContextApi = () => {
    const name = "Huxn";
    const age = 22;
   

  return (
    <div>
        <Data.Provider value={name} >
            <Data1.Provider value={age}>
            <ComponentA />
            </Data1.Provider>
        </Data.Provider>
        
    </div>
  )
}

export default BasicContextApi;