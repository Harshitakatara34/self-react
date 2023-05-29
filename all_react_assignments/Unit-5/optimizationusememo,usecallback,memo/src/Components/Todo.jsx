import React from 'react'
import {memo} from "react"

const heavyTask=(delay)=>{
    const start=Date.now();
    while(Date.now()-start>delay){
       continue; 
    }
}

// const customCheck=(prev,curr)=>{
//     return prev.status ===curr.status && prev.title===curr.title;
// }

const Todo = memo(({id,title,status,handleDelete,handleToggle}) => {
useMemo(()=>{
    heavyTask(200)
},[]) 
    return (
    <div>
      <h1>{title}==={status?"completed":"pending"}</h1>
    <button onClick={()=>handleDelete(id)}>delete</button>
    <button onClick={()=>handleToggle(id)}>Toggle</button>
    </div>
  )
})




//we have to give dependency
// },customCheck)
export default Todo
