import React from 'react'
import {useEffect} from "react"
import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useSearchParams,useLocation } from 'react-router-dom'
import { getProducts } from '../Redux/ProductReducer/action'
import Pagination from './Pagination'
import ProductCard from './ProductCard'
import styled from 'styled-components'
const ProductList = () => {
  const[page,setPage]=useState(1)
  const[searchParams]=useSearchParams()
  console.log(useSearchParams())
    const dispatch=useDispatch()
   const location=useLocation();
    const {products}=useSelector((store)=>store.ProductReducer)
    
   console.log(searchParams.getAll("khushi"))
   let obj={
    params:{
      gender:searchParams.getAll("khushi"),
    _sort:searchParams.get("order") && "price",
   _order:searchParams.get("order")
    }, 
   }
   console.log(page)
  //  console.log(location.search)
   useEffect(()=>{
dispatch(getProducts(obj,page))
    },[location.search,page])
  return (
    <div>
 <div>
      {products.length>0 && products.map((el)=>{
        return(
            <ProductCard key={el.id} {...el}/>
        )
      })}
      <Pagination page={page} setPage={setPage}/>
    </div>
    <div>
   
    </div>
    </div>
   
  )
}

export default ProductList
