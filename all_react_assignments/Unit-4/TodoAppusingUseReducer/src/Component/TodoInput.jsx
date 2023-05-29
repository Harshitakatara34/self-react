import React from 'react'
import { useState } from 'react'

const TodoInput = ({handleAdd}) => {
    const [value,setvalue]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(value){
            handleAdd(value)
            setvalue("")
        }
    }
  return (
   <form action="" onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
      <button disabled={!value} type='submit'>Add</button>
   </form>
      
  
  )
}

export default TodoInput
