import React from 'react'
import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { useSearchParams,useLocation } from 'react-router-dom'
import { getProducts } from '../Redux/ProductReducer/action'
import ProductCard from './ProductCard'
const ProductList = () => {
  const[searchParams]=useSearchParams()
    const dispatch=useDispatch()
   const location=useLocation();
    const {products}=useSelector((store)=>store.ProductReducer)
   console.log(searchParams.getAll("category"))
   let obj={
    params:{
      gender:searchParams.getAll("category"),
    },
   }
   
   useEffect(()=>{
dispatch(getProducts(obj))
    },[location.search])
  return (
    <div>
      {products.length>0 && products.map((el)=>{
        return(
            <ProductCard key={el.id} {...el}/>
        )
      })}
    </div>
  )
}

export default ProductList
