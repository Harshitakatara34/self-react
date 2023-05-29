import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import {useSearchParams} from "react-router-dom"
import styled from 'styled-components'
import { getProduct } from '../Redux/productReducer/action'
export const Navbar = () => {
 
  const [searchparams, setSearchparams] = useSearchParams("")
  const [query,setQuery]=useState("")
 

  const dispatch=useDispatch()

  const paramsObj={
    params:{
      q:query&&query
    }
  }
  useEffect(()=>{
dispatch(getProduct(paramsObj))
  },[query])
  return (
    <DIV>
        <h1>Product List</h1>
       <Link to={"/"}>Home</Link>
   <Link to={"/add-product"} >Admin Page</Link>
   <Link to={"/login"}>Login</Link>
<input type="text" placeholder='search item'
 onChange={(e)=>setQuery(e.target.value)}/>
    </DIV>
  )
}
let DIV=styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin: 10px;
    border-bottom: 1px solid gray;
`
