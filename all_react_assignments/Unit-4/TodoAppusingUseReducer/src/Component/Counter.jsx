import React, { useContext } from 'react'
import { AppContext } from '../Context/TodoContext'

export const Counter = () => {
    const [{count},dispatch]=useContext(AppContext)
  return (
    <div>
        <div>
        <h1>Count:{count}</h1>
        <span>By 1</span>
        <button onClick={()=>dispatch({type:"Inc",})}>Inc</button>
        <button onClick={()=>dispatch({type:"Dec"})}>Dec</button>

        <br />
<br />
        <span>By 100</span>
        <button onClick={()=>dispatch({type:"Inc",payload:100})}>Inc</button>
        <button onClick={()=>dispatch({type:"Dec",payload:100})}>Dec</button>
        </div>
    </div>
  )
}
