// import { useEffect, useState } from "react";
import ComponentOne from "./components/ComponenetOne";
import ComponentTwo from "./components/ComponenetTwo";
import UseStateDemo from "./components/State_Hooks/UseStatedemo";
import UserProfile from "./components/ContextApi/UserProfile";
import UpdateUser from "./components/ContextApi/UpdateUser";
import { UserProvider } from "./components/ContextApi/UserContext";
import UseReduceBasic from "./components/UseReducer/UseReduceBasic";
import { FaCartArrowDown } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import Counter from "./components/UseReducer/Counter";
import UseRefBasic from "./components/UseRef/UseRefBasic";
import Timer from "./components/UseRef/Timer";
import useFetch from "./components/Custom_Hooks/useFetch";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const name = 'Zahid';
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //      .then((res) => res.json())
  //      .then((data) => setData(data));

  // } ,[]);

  return (
    <div>
     
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <UseReduceBasic />

      <Counter/>
      <UseRefBasic/>
      <Timer/>
      {data && data.map((item) => {
        return <p key={item.id}> {item.title}</p>
      })};
   
    </div>
  );
};

export default App;
