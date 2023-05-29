import { useState } from "react"
export const TodoInput=({addTodo})=>{
    const[input,setinput]=useState("")
    const handleAdd=()=>{
    addTodo(input)
     console.log(input)
     setinput("")
    }
    console.log(input)
    return(
        <>
        <h1>TodoInput</h1>
        <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder="enter todo"/>
        <button onClick={handleAdd}>Add Todo</button>
        </>
    )
}