import axios from "axios"
import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS } from "./actionType"
import { PRODUCT_REQUEST } from "./actionType"
export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post(" http://localhost:8080/products",data).then(()=>{
        dispatch({type:ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}
export const getProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})

    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}