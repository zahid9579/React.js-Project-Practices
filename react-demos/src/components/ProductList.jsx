import React from 'react'

const ProductList = () => {

    const products = [
        {id : 1, name : "Phone", price : "$699"},
        {id : 1, name : "HeadPhone", price : "$399"},
        {id : 1, name : "Buds", price : "$199"}
    ];

  return (
    <div>
        {products.map(p => (
            <div key={p.id}>
                <h1>Name: {p.name} </h1>
                <h1>Price: {p.price} </h1>
            </div>

        ))}
    </div>
  )
}

export default ProductList;