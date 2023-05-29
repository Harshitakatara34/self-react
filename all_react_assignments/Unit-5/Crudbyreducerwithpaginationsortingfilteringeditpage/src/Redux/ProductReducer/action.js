import axios from "axios"
import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, SET_PAGE } from "./actionType"
import { PRODUCT_REQUEST } from "./actionType"
export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post(" http://localhost:8080/products",data).then(()=>{
        dispatch({type:ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}
export const getProducts=(paramObj,page)=>(dispatch)=>{
    console.log(page)
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=2`,paramObj).then((res)=>{
       dispatch({type:SET_PAGE,payload:+res.headers.get("x-total-count")})
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})

    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const editProduct=(dataObj,id) => (dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
return axios.patch(`http://localhost:8080/products/${id}`,dataObj)
.then(()=>{
    dispatch({type:PATCH_PRODUCT_SUCCESS})
})
.catch(()=>{
    dispatch({type:PRODUCT_FAILURE})
})
}