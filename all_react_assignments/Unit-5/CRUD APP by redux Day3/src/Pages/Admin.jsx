import React from 'react'
import {useState} from "react"
import {useDispatch} from "react-redux"
import { addProduct } from '../Redux/ProductReducer/action'
const initialState={
    image:"",
    title:"",
price:"",
brand:"",
discount:"",
gender:"",
}
const Admin = () => {
     const [product,setProduct]=useState(initialState)
    const dispatch=useDispatch();
     const handleChange=(e)=>{
const{name,value}=e.target;
setProduct((prev)=>{
    return{...prev,[name]:value}
})
    }
const handleSubmit=(e)=>{
e.preventDefault();
dispatch(addProduct(product))
console.log(product)
setProduct(initialState)
}
   
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input name="image" value={product.image} onChange={(e)=>handleChange(e)} type="text" placeholder="image"/>
        <input name="title" value={product.title} onChange={(e)=>handleChange(e)} type="text" placeholder="title"/>
        <input name="price" value={product.price}  onChange={(e)=>handleChange(e)} type="text" placeholder="price"/>
        <input name="brand" value={product.brand} onChange={(e)=>handleChange(e)} type="brand" placeholder="brand"/>
        <input   name="discount"value={product.discount} onChange={(e)=>handleChange(e)} type="text" placeholder="discount"/>
<select name="gender" id=""  onChange={(e)=>handleChange(e)}>
    <option value="">Select Gender</option>
    <option value="male">Men</option>
    <option value="female">Women</option>
    <option value="kids">kids</option>
</select>
<button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Admin
