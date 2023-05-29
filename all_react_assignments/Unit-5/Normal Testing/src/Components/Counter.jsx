import React, { useState } from 'react'
import { Button } from './Button'

export const Counter = () => {
  const [count,setCount]=useState(0)
  const handleAdd=()=>{
    setCount(count+1)
  }
    return (
    <div data-testid="counter"><h2>counter: {count}</h2>
    {/* <button data-testid="add-btn" 
    onClick={handleAdd}>Click Me</button> */}
    <Button color={"text"} size={"small"} handleAdd={handleAdd}>Add</Button>
    </div>
  )
}