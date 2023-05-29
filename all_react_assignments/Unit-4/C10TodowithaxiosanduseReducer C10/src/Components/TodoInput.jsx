import React, { useState } from 'react';


const TodoInput = ({HandlePost}) => {
 const [formdata , setformdata] = useState({
    title:"",
    status:false
 })
 const handleSubmit= ()=>{
  HandlePost(formdata)
}
const handleChange =(e)=>{
    setformdata({
        ...formdata,
        title:e.target.value,
        status:false
    })
}

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" data-testid = "todo-input"
       placeholder='enter title'
       value={formdata.title}
       onChange={handleChange}
      />
      <button onClick={handleSubmit} data-testid = "add-button">Add Todo</button>
    </div>
  );
}
export default TodoInput;
