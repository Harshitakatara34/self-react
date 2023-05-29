import React, { useRef } from 'react'
import useDebounce from '../Hooks/useDebounce'

const ClickMe = () => {
    


    const handleClick=()=>{
        console.log("Network Request Has Been Made")
            }
   const debounce=useDebounce(handleClick,1500)

   
  return (
    <div>
      <button onClick={debounce}>ADD Debounce</button>
    </div>
  )
}

export default ClickMe
// let {current:id}=useRef()
// const debounce=(func,delay)=>{
//     id&&clearTimeout(id)
//     id=setTimeout(()=>{
//         func();
//     },delay)
// }