import React from 'react'
import { getTodo } from './api'
import { useState } from 'react'
import { useEffect } from 'react'
import { Todo } from './Constants'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
const TodoApp = () => {
    const[todos,setTodos]=useState<Todo[]>([]);
     const[update,setUpdate]=useState(false)
  const onAdd=()=>{
    setUpdate((prev)=>!prev)
  }
  
  
  useEffect(()=>{
    console.log(getTodo())
    getTodo().then((res)=>{
      console.log(res)
        setTodos(res.data)
    })
},[update])
 
 
    return (
    <div><TodoInput update={onAdd}/>
    {todos.map((el)=>{
        return <TodoItem key={el.id} {...el} update={onAdd}/>

    })}
    </div>
  )
}

export default TodoApp