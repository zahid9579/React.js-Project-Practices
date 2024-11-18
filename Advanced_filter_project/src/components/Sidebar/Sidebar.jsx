import React from 'react'
import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price'
import Colors from './Colors/Colors'

import { TiShoppingCart } from "react-icons/ti";

const Sidebar = ({handleChange}) => {
  console.log(handleChange)
  return (
   <>
   <section className='sidebar'>
      <div className='logo-container'>
        <TiShoppingCart/>
      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>



   </section>



   </>
  )
}

export default Sidebar;
