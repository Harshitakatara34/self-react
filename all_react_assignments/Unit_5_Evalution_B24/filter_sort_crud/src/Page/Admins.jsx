
import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import styled from "styled-components"
import { addProduct } from '../Redux/productReducer/action'
const intialstate={
    name:"",
    image:"",
    price:"",
    category:"",
    gender:"",
    brand:"",

}
export const Admins = () => {
    const [product,setProduct]=useState(intialstate)
    const dispatch=useDispatch()  
  
    const handleChange=(e)=>{
  const {name,value}=e.target
  setProduct((pre)=>{
    return {...pre,[name]:name==="price"?+value:value}
  })
 
    }
    const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(product);
  dispatch(addProduct(product))
  setProduct(intialstate)
    }
  return (
    <DIV>
        <form onSubmit={handleSubmit}>
            <h1>Admin Operation Page</h1>
        <input type="text" name="name" placeholder='Title' value={product.name} onChange={(e)=>handleChange(e)}/>
        <input type="text" name="image" placeholder='Give Your Product Image' value={product.image} onChange={(e)=>handleChange(e)} />
        <input type="number" name='price' placeholder='price'value={product.price} onChange={(e)=>handleChange(e)}/>
        <input type="text" name="brand" placeholder='brand' value={product.brand} onChange={(e)=>handleChange(e)} />
        <select name="category" value={product.category} onChange={(e)=>handleChange(e)}>
            <option value="">Select Category</option>
            <option value="top-wear">Top wear</option>
            <option value="bottom-wear">Bottom Wear</option>
        <option value="shoes">Shoes</option>
        </select>
        <select name="gender" value={product.gender} onChange={(e)=>handleChange(e)}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        <option value="kids">Kids</option>
        </select>
        <button type='submit'>ADD PRODUCT</button>
        </form>
    </DIV>
  )
}
const DIV = styled.div`
width: 400px;
margin: auto;
border: 1px solid gray;


    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    input{
        height: 40px;
        font-size: large;
        width:80% ;
       
    }
    select{
        height: 40px;
    }
    button{
width: 50%;
height:35px ;
cursor: pointer;
border: none;
color: #ffffff;
background-color: #a11c1c;
border-radius: 5pc;
    };
`