import React, { useContext} from 'react'
import { AppContext } from '../Context/TodoContext'
import TodoInput from './TodoInput'

// const todoReducerFn=(state,{type,payload})=>{
//     switch(type){
//       case "ADD":{
// state=[...state,{id:Date.now(),value:payload,isCompletd:false}];

// return state;
//       }  
//       case "TOGGLE":{
// const newState=state.map((todo)=>{
//     if(todo.id===payload){
//         todo.isCompletd=!todo.isCompletd
//     }
//     return todo
// })
// return newState

//       } 
//       case "DELETE":{
//         const newState=state.filter((todo)=>(todo.id!==payload))

//         return newState 
//       } 
//       default:{
// return state
//       }
//     }
// }

export const TodoApp = () => {
    const [{todos},dispatch]=useContext(AppContext)


    return (
    <div >
<h1>Todos</h1>
<TodoInput handleAdd={(value)=>dispatch({type:"ADD",payload:value})}/>
{todos.map((todo)=>(
    <div key={todo.id} style={{margin:"20px"}} >
        <span  style={{textDecoration:todo.isCompletd?"line-through":"none"}}>
        {todo.value}-{todo.isCompletd?"Completed":"Not completed"} 
        </span>
    <button onClick={()=>dispatch({type:"TOGGLE",payload:todo.id})}>Toggle{" "}</button>
     <button onClick={()=>dispatch({type:"DELETE",payload:todo.id})}>Delete{" "}</button>
  
    </div>
))}
    </div>
  )
}
