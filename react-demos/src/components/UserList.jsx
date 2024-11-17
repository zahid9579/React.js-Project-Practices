import React from 'react'

const UserList = () => {
    const users = [
        {id : 1, name: "Zahid", age: 21},
        {id : 2, name: "Ansari", age: 30},
        {id : 3, name: "Kamal", age: 10}

    ]
  return (
    <>
    {users.map((user) => (
        <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>age: {user.age}</h1>
          


        </div>
    ))}
    </>
  )
}

export default UserList;




// const App = () => {

//   const userInfo = [
//     {
//       username: "Zahid",
//       email: "kamalZahid@gamil.com",
//       location: 'India'
//     },
//     {
//       username: "Kamal",
//       email: "kamla122@gamil.com",
//       location: 'Nepal'
//     },
//     {
//       username: "Ansari",
//       email: "example.123@gamil.com",
//       location: 'Dubai'
//     }
//   ];

//   return (
//     <div>
//       {userInfo.map(({ username, email, location }) => (
//         <ul key={Math.random()}>
//           <li>{username}</li>
//           <li>{email}</li>
//           <li>{location}</li>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default App;
