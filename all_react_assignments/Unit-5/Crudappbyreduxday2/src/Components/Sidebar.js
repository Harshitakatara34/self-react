import React, { useEffect } from 'react'
import {useSearchParams} from "react-router-dom"
import { useState } from 'react'
const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialCategory=searchParams.getAll("category")
    const[category,setCategory]=useState(initialCategory || [])
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
setSearchParams(params)
    },[category])
    console.log(category)
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
    </div>
   
  )
}

export default Sidebar
