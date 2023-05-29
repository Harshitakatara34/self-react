import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";


const Todos = () => {
const [data , setdata] = useState([])

  const FetchTodo = ()=>{
    return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((res)=> setdata(res.data))
    .catch((err)=> console.log(err))
  }


  useEffect(()=>{
    FetchTodo()
  },[])

  const PostReq = (data)=>{
    console.log(data);
    return axios({
      method:"post",
      url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
      data:data
    }).then(() => FetchTodo())
   }
   const HandlePostreq = (data)=>{
    console.log(data);
    PostReq(data)
   }

  return (
    <div style={{alignContent:"center"}}>
    {/* add TodoInput component here */}
      <TodoInput HandlePost={HandlePostreq}/>

    {/* map through the todos array and display the tasks */}

    <div data-testid = "todos-wrapper">
    {
      data.map((item)=>(
        <div key={item.id}>
          <span>{item.title} -  {item.status? "True":"False"}  </span>
        </div>
      ))
    }
    </div>
    </div>
  );
};

export default Todos;
