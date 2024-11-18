import React from 'react'
import './Price.css'
import Input from '../../Input/Input';

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-price'>Price</h2>

      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value="" name ="test2"/>
        <span className='checkmark'></span>All
       </label>

       <input handleChange = {handleChange} value={50} title='$0 - 50' name='test2'/>
       
       <input handleChange = {handleChange} value={100} title='$50 - 100' name='test2'/>

       
       <input handleChange = {handleChange} value={150} title='$100 - 150' name='test2'/>

   
       <input handleChange = {handleChange} value={200} title='Over $150' name='test2'/>
    
   
    
       
   

      
    </div>
  )
}

export default Price;