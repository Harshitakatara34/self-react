import React from 'react'

import { getTodos } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

import {useEffect} from "react"
import TodoInput from './TodoInput'
const TodoList = () => {

const dispatch=useDispatch()
const todos=useSelector(state=>state.todos)
   

   
  useEffect(()=>{
    // getTodos(dispatch)
    dispatch(getTodos)
    console.log("hfuef")
  },[])
    
  return (
    <div>
    <TodoInput />
      {todos.length>0 && todos.map((el)=>{
        return(
            <div key={el.id}>{el.title}---{el.status?"true":"false"}
            </div>
        )
      })}
    </div>
  )
}

export default TodoList
