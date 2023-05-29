import React from 'react'
import useCounter from '../Hooks/useCounter'

const Countercustomhook = () => {
    const [state,setState]=useCounter(0,2)
  return (
    <div>
      <h1>Count:{state}</h1>
      <button onClick={setState}>ADD WITH CUSTOM HOOK</button>
    </div>
  )
}

export default Countercustomhook
