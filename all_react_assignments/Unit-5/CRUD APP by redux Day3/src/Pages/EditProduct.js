import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { editProduct } from '../Redux/ProductReducer/action'
const EditProduct = () => {
  const {id}=useParams()
  const[data,setData]=useState("")
 const[success,setSuccess]=useState(false)
  const product=useSelector((store)=>store.ProductReducer.products)
const dispatch=useDispatch()


  useEffect(()=>{
  const data=product.find((el)=>el.id===+id)
console.log(data)
setData(data)
},[])
const handleSubmit=(e)=>{
e.preventDefault()
console.log(data)
dispatch(editProduct(data,id)).then(()=>{
  setSuccess(true)
})
}
const handleChange=(e)=>{
const {name,value}=e.target
setData(prev=>{
  return {...prev,[name]:value}
})
}
console.log(data)
  return (
    <div>
    <h1>Edit Product :{id}</h1>
    <h2>{success && "Product edited successfully"}</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}type="text" name={"image"} value={data.image}/>
        <input onChange={handleChange}type="text" name={"title"} value={data.title}/>
        <input onChange={handleChange}type="number" name={"price"} value={data.price}/>
        <input onChange={handleChange}type="text"name={"brand"} value={data.brand}/>
        <input onChange={handleChange}type="text" name={"discount"} value={data.discount}/>

        <select name="gender" value={data.gender}>
    <option value="">Select Gender</option>
    <option value="male">Men</option>
    <option value="female">Women</option>
    <option value="kids">kids</option>
</select>
<button>Edit</button>
      </form>
    </div>
  )
}

export default EditProduct
