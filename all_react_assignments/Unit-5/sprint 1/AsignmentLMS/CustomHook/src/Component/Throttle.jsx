import React, { useRef } from 'react'
import useThrottle from '../Hooks/useThrottle'


const Throttle = () => {

    const handleClick=()=>{
    console.log("Network Request Has Been Made")
        }
    const throttles=useThrottle(handleClick,1500)
  return (
    <div>
        <button onClick={throttles}>ADD Throttle</button>
    </div>
  )
}

export default Throttle

// let {current:wait}=useRef(false)

// const handleClick=()=>{
//     console.log("Network Request Has Been Made")
//         }
// const throttles=(func,delay)=>{
// count++
// console.log(count)
// if(wait) return;

// func()
// wait=true;

// setTimeout(() => {
//     wait=false
// },delay);
// }

// <button onClick={()=>throttles(handleClick,1500)}>ADD Throttle</button>