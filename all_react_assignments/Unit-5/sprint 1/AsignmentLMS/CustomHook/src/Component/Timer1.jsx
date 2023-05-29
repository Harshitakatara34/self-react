import React, { useEffect, useState } from 'react'

const Timer1 = () => {
    const [state,setState]=useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setState((pre)=>!pre)
        }, 2000);
    })
  return <div> { state&&<h1>This is timer -1 </h1>} </div>
  
}

export default Timer1
