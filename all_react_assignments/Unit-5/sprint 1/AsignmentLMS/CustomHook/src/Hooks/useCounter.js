import React,{useState} from 'react'

const useCounter = (initialvalue,payload) => {
  const[state,setState]=useState(initialvalue)
  let fun=()=>{
    setState((prev)=>prev+payload)
  }
  return [state,fun]
}

export default useCounter
