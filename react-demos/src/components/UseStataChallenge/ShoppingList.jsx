import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !quantity) return;

        const newItem = {
            name, quantity: parseInt(quantity),
        };

        setItems((prevItems) => [...prevItems, newItem]);
        setName("");
        setQuantity("");

    }

  return (
    <div>
        <h1> Shopping List </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>

            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>


            <button type="submit"> Add Items </button>
          
          

        </form>

        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.name} - Quantity : {item.quantity}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingList;