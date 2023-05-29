import React from 'react'
import {useState} from "react"
import Todo from './Todo'
import {useCallback} from "react"

const initialState=[
    {id:1,title:"task1",status:false},
 {id:2,title:"task1",status:false},
{id:3,title:"task1",status:false},
{id:4,title:"task1",status:false},
]
const TododInput = () => {
    const[todos,setTodos]=useState(initialState)
    const [title,setTitle]=useState("")
   const handleChange=(e)=>{
setTitle(e.target.value)
   }

  
   const handleAdd=()=>{
    const newTodo={
        title,
        id:Date.now()+title,
        status:false,
    }
    setTodos([...todos,newTodo])
    setTitle("")
   }
   const handleToggle=useCallback((id)=>{
setTodos((prev)=>{
    return prev.map(el=>{
        return el.id===id ?{...el,status:true}:{...el}
    })
})
   },[])
   
   const handleDelete=useCallback((id)=>{
   setTodos((prev)=>{
    return prev.filter((el)=>el.id!==id)
   })
   },[])
    return (
    <div>
      <input type="text" value={title} onChange={handleChange}/>
    <button onClick={handleAdd}>Add Todo</button>
   <br/>
   <h3>Todos</h3>
   {todos.map((el)=>{
    return(
        <Todo handleDelete={handleDelete} handleToggle={handleToggle} key={el.id} {...el}/>
    )
   })}
   
   
    </div>
  )
}

export default TododInput
