import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pagination = () => {
const store=useSelector((state)=>state.ProductReducer.product)
const dispatch=useDispatch();
const [page,setPage]=useState(1)


  return (
    <div>Pagination</div>
  )
}

export default Pagination