import React, { useState } from 'react'


// with object
const UseStateDemo3 = () => {
    // const [movie, setMovie] = useState({
    //     title: "Equalizer 3",
    //     rating: 7
    // });

    // const handleRating = () =>  setMovie({...movie, rating:5});
    const [movies, setMovie] = useState([
        {id:1, title: "Spider Man", rating: 3},
        {id: 2, title: "Superman", rating: 6},
    ]);
    
       
    const handleClick = () => {
        setMovie(
            movies.map((m) => (m.id == 1 ? {...movies, title: "john Wick 5"} : m))
        );
    };
   

  return (
    <div>
        {/* <h1>{movie.title}</h1>
        <h1>{movie.rating}</h1>
        <button onClick={handleRating}> Change Rating</button> */}
        {movies.map(m => (
            <li onClick={Math.random()}>{m.title}</li>
        ))}

        <button onClick={handleClick}>Change name </button>


    </div>
  )
}

export default UseStateDemo3;