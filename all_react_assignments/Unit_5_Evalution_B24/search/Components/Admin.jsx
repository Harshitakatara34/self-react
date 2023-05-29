import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddAction } from '../Redux/ProductReducer/action'
const initialState={
  image:"",
  title:"",
  price:"",
  category:""
}
const Admin = () => {
const [val,setVal]=useState(initialState)
const dispatch=useDispatch()
const handleChange=(e)=>{
const {name,value}=e.target;
setVal({...val,[name]:value})
}
const handleSubmit=(e)=>{
e.preventDefault();
dispatch(AddAction(val))
}

  return (
    <div>
       <div
        style={{
          width: "30%",
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <input
          type="url"
          placeholder="Image"
          onChange={handleChange}
          name="image"
        />
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="Category"
          onChange={handleChange}
          name="category"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Admin