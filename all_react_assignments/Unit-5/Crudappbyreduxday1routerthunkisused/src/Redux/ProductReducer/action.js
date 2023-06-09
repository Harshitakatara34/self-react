import axios from "axios"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS } from "./actionType"
import { ADD_PRODUCT_REQUEST } from "./actionType"
export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    axios.post(" http://localhost:8080/products",data).then(()=>{
        dispatch({type:ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:ADD_PRODUCT_FAILURE})
    })
}