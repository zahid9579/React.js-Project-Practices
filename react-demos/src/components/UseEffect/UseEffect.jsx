import { useState, useEffect } from "react";
import React from 'react'

const UseEffect = () => {

    const [data, setData] = useState(0)

    useEffect(() => {
       async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        if(data && data.length) setData(data);
       }

       getData();
    } ,[]);



  return (
    <div>
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <strong>{todo.title}</strong>
          <p>Body --- {todo.body}</p>
        </li>
      ))}
    </ul>
  </div>
  
  )
}

export default UseEffect;