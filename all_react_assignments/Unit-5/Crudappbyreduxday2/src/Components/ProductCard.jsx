import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({image,title,price,brand,discount,gender,id}) => {
  return (
    <div>
      <img src={image} alt="image"/>
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3>{discount}</h3>
      <h3>{gender}</h3>
      <h3>{brand}</h3>
      <button><Link to={`/edit/${id}`}>edit</Link></button>
    </div>
  )
}

export default ProductCard
