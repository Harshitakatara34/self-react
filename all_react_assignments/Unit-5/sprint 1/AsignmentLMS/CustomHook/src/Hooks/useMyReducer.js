import React, { useState } from 'react'

const useMyreducer = (reducer,initialstate) => {
    const [state,setState]=useState(initialstate)

    const dispatch=(action)=>{
        const newState=reducer(state,action)
        setState(newState)
    }
  return [state,dispatch]
}

export default useMyreducer
