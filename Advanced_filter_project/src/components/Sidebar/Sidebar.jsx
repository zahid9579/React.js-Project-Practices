import React from 'react'
import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price'
import Colors from './Colors/Colors'

import { TiShoppingCart } from "react-icons/ti";

const Sidebar = () => {
  return (
   <>
   <section className='sidebar'>
      <div className='logo-container'>
        <TiShoppingCart/>
      </div>
      <Category/>
      <Price/>
      <Colors/>



   </section>



   </>
  )
}

export default Sidebar;
