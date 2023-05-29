import {useState} from "react"

export const Counter=()=>{
    const[count,setCount]=useState(0)
   const handleadd=()=>{
    setCount(count+1)
   }
   const handlereduce=()=>{
    setCount(count-1)
   }

   
   
   
    return(
        <>
<h1 data-testid="counter">Counter:{count}</h1>
        <button className="add" onClick={handleadd}>add</button>
        <button className="reduce" onClick={handlereduce}>reduce</button>
        <button className="reduce">random</button>
      
      
        </>

        
    )
}