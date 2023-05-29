import React from 'react'
import {useState} from "react"
import { useDispatch } from 'react-redux'
import { addTodo, getTodos } from '../Redux/action'
const TodoInput = () => {
    const [text,setText]=useState("")
  const dispatch=useDispatch()

  const handleClick=()=>{
    console.log(text);
    // addTodo(text,dispatch)
    dispatch(addTodo(text)).then(()=>dispatch(getTodos))
    
   
    setText("")
  }
    return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleClick}>Add Todo</button>

    </div>
  )
}

export default TodoInput