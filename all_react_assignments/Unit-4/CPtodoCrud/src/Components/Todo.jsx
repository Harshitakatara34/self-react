import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

const Todos = () => {
  const [data,setData]=useState([])

const GetTodos=()=>{
  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
  .then((res)=> setData(res.data))
  .catch((err)=> console.log(err))
}

  useEffect(()=>{
GetTodos()
  },[])

  const UpdateTodo=(data)=>{
    return axios({
      method:"post",
      url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
      data:data
    }).then(()=>GetTodos())
  }

  const onChange=(data)=>{
UpdateTodo(data)
  }
  return (
    <div>
   
    {/* add TodoInput component here */}
   <TodoInput onChange={onChange}/>
    {/* map through the todos array and display the tasks */}
    <div  data-testid = "todos-wrapper">
    {
      data.map((ele)=>(
        <div key={ele.id}>
          <span>{ele.title} -  {ele.status? "True":"False"}  </span>
        </div>
      ))
    }
    </div>
   
    
    </div>
  );
};

export default Todos;
