import styled from "styled-components"
import {useDispatch} from "react-redux"
import { deleteProduct, getProduct } from "../Redux/productReducer/action"
export const ProductCard=({id,name,price,image,brand,category,gender})=>{
    const dispatch=useDispatch()
    const handleDelete=()=>{
dispatch(deleteProduct(id)).then(()=>{
    dispatch(getProduct({}))
})
    }
    return (
        <DIV> 
            <img src={image} alt={name} />
            <h3>Product : {name}</h3>
            <p>Brand : {brand }</p>
            <p>Category : {category}</p>
            <p>Gender : {gender}</p>
            <h3>Price : {price}</h3>
<button onClick={handleDelete}>Delete</button>
<button>Edit</button>
        </DIV>
    )
}
const DIV=styled.div`
border: 1px solid gray;
padding: 10px;
    img{
        width: 100%;
    }
`