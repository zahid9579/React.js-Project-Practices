import React from 'react'
import { useState } from 'react';


// UseState with Arrays

const Usestatedemo2 = () => {
    const [friends, setFriends] = useState(["Alex", "john"]);
    
    const addOneFriend = () => setFriends([...friends, "zahid"]);
    const removeOneFriend = () => setFriends(friends.filter(f => f != 'john'));
    const updateOne = () => {
        setFriends(friends => friends.map(f => f === 'Alex' ? 'Alex Smith' : f));
    }
    

  return (
    <div>
        {friends.map((f) => (
            <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={addOneFriend}>Add New Friend</button>
        <button onClick={removeOneFriend}>Remove One Friend</button>
        <button onClick={updateOne}>Update one Friend</button>
    </div>
  )
}

export default Usestatedemo2;