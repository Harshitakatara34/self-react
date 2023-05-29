import { Delete_Product_Success, Get_Product_Success, Post_Product_Success, Product_Failure, Product_Request } from "./actionType"
import axios from "axios"
export const addProduct=(newObj)=>(dispatch)=>{
    dispatch({type:Product_Request})
axios.post(`http://localhost:8080/products`,newObj).then((res)=>{
    dispatch({type:Post_Product_Success})
    console.log(res.data);
}).catch((err)=>{
    dispatch({type:Product_Failure})
})
}

export const getProduct=(paramObj)=>(dispatch)=>{
    dispatch({type:Product_Request})
axios.get(`http://localhost:8080/products`,paramObj).then((res)=>{
    dispatch({type:Get_Product_Success,payload:res.data})
}).catch((err)=>{
    dispatch({type:Product_Failure})
})
}

export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:Product_Request})
let payload=[]
axios.get(`http://localhost:8080/products`).then((res)=>{
    payload=res.data.filter((el)=>el.id==id)
})
return axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
    dispatch({type:Delete_Product_Success,payload})
}).catch((err)=>{
    dispatch({type:Product_Failure})
})
}