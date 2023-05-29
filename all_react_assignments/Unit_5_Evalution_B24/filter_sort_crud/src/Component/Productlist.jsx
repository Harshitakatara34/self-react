import React from 'react'
import { useEffect } from 'react'
import {useLocation, useSearchParams} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { getProduct } from '../Redux/productReducer/action'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'


export const Productlist = () => {
    const [searchparams]=useSearchParams()
    const product=useSelector((state)=>state.productReducer.product)
    const dispatch=useDispatch()
    console.log(product);
    const location=useLocation()
    let obj={
        params:{
            gender:searchparams.getAll("gender"),
            category:searchparams.getAll("category"),
            _sort:searchparams.get("order")&&"price",
            _order:searchparams.get("order"),
        }
    }
    useEffect(()=>{
        dispatch(getProduct(obj))
    },[location.search])
  return (
    <DIV>
        {product.length>0&&product.map((ele)=>{
            return <ProductCard key={ele.id} {...ele}/>
        })}
    </DIV>
  )
}
const DIV=styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
`