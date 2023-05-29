import React from 'react'
import { useState } from 'react'
import { postTodo } from './api'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
type TodoInputProp={
    update:()=>void;
}
const TodoInput = ({update}:TodoInputProp) => {
    const [title,setTitle]=useState<string>("")
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setTitle(e.target.value)
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
 postTodo(title)
 update()
 setTitle("")
//  update((prev)=>{
//     return !prev
//  })
// 
//   }
  }
 
    return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input value={title} type="text" placeholder="title" onChange={handleChange}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput
