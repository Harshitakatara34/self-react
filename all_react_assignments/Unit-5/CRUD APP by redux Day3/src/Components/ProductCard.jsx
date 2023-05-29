import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const ProductCard = ({image,title,price,brand,discount,gender,id}) => {
  return (
    <DIV>
      <img src={image} alt="image"/>
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3>{discount}</h3>
      <h3>{gender}</h3>
      <h3>{brand}</h3>
      <button><Link to={`/edit/${id}`}>edit</Link></button>
    </DIV>
  )
}

const DIV=styled.div`
display:grid;
border:1px solid gray;
`
export default ProductCard
