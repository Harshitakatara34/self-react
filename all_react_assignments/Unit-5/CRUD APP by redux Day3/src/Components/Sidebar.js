import React, { useEffect } from 'react'
import {useSearchParams} from "react-router-dom"
import { useState } from 'react'
const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialCategory=searchParams.getAll("category")
    const initialOrder=searchParams.get("order")
    const[category,setCategory]=useState(initialCategory || [])
   const[order,setOrder]=useState(initialOrder|| "")
    const handleSort=(e)=>{
console.log(e.target.value)
setOrder(e.target.value)
   }
   console.log(order)
    const handleChange=(e)=>{
let newCateggory=[...category];
const value=e.target.value;
if(newCateggory.includes(value)){
    newCateggory=newCateggory.filter((el)=>el!==value)
}
else{
    newCateggory.push(value)
}
setCategory(newCateggory)
console.log(searchParams.getAll("category"))
    }
    useEffect(()=>{
        let params={
            category
        }
 order && (params["order"] = order)
setSearchParams(params)
    },[category,order])
    console.log(category,order)
  return (
    <div>
 <div>
      <input type="checkbox" value="male" onChange={handleChange} checked={category.includes("male")}/>
      <label>Men</label>
    </div>
    <div>
      <input type="checkbox" value="female" onChange={handleChange} checked={category.includes("female")}/>
      <label>Women</label>
    </div>
    <div>
      <input type="checkbox" value="kids" onChange={handleChange} checked={category.includes("kids")}/>
      <label>Kids</label>
    </div>
    <br/>
    <br/>
    <h3>Sort Based On price</h3>
<div onChange={handleSort}>
<input type="radio" value={"asc"} name="order" defaultChecked={order==="asc"}/>
<label>Ascending</label>
<input type="radio" value={"desc"} name="order" defaultChecked={order==="desc"}/>
<label>Descending</label>
</div>

    </div>

  )
}

export default Sidebar
