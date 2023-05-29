import React, { useEffect, useState } from 'react'

const useTimer = (delay) => {
    const [show,setShow]=useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setShow((pre)=>!pre)
        }, delay);
    })
  return show
}

export default useTimer
