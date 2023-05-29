import {useState} from "react"
const Counter=()=>{
    const [state,setstate]=useState(0)
    return(
        <>
        <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid = "count">{state}</h3>
        <button data-testid = "add-btn" onClick={()=>setstate(state+1)}>+</button>
        <button data-testid = "subtract-btn" onClick={()=>setstate(state-1)}>-</button>
        <button data-testid = "double-btn"onClick={()=>setstate(state*2)}>Double</button>
        </>
    )
}
export default Counter