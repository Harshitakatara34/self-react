import React, { useState } from 'react'
import { patchTodo } from './api'
import { Todo } from './Constants'

interface TodoItemProps extends Todo{
    update:()=>void;
}



const TodoItem = ({title,status,id,update}:TodoItemProps) => {
   const handleToggle=()=>{
    patchTodo(id,status)
    update()
   }
  return (
    <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <p>{status?"true":"false"}</p>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default TodoItem