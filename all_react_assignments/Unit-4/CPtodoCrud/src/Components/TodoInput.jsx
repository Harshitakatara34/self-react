import React, { useState } from 'react'

const TodoInput = ({onChange}) => {
const [text,setText]=useState({
  title:"",
    status:false
})
const handleSubmit= ()=>{
 onChange(text)
}
const handleChange =(e)=>{
  setText({
      ...text,
      title:e.target.value,
      status:false
  })
}

  return (
    <div>
       <input type="text" data-testid = "todo-input"
       placeholder='Enter Your Todo'
       value={text.title}
       onChange={handleChange}
      />
      <button onClick={handleSubmit} data-testid = "add-button">Add Todo</button>
    </div>
  )
}

export default TodoInput
