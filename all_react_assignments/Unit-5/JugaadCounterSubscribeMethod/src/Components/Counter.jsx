import { useState } from "react"
import { add } from "../Redux/action";
import { reduce } from "../Redux/action";
import { store } from "../Redux/store";
const Counter=()=>{
    const [render,setRender]=useState(false)
   const {getState,dispatch,subscribe}=store
    console.log(getState())

    subscribe(()=>{
        console.log("state changed:",getState())
    setRender((prev)=>prev+1)
    })

    const addHandler=()=>{
dispatch(add())
    }
    const reduceHandler=()=>{
dispatch(reduce())
    }
    return(
        <>
        <h1>Counter:{getState().counter}</h1>
        <button onClick={addHandler}>Add</button>
        <button onClick={reduceHandler}>Reduce</button>
        </>
    )
}
export default Counter