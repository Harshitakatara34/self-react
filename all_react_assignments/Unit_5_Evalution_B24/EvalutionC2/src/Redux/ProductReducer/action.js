import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios"
export const GET_PRODUCT_REQUEST_action=()=>{
 return {type:GET_PRODUCT_REQUEST} 
}
export const GET_PRODUCT_SUCCESS_action=(payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload} 
 }
 export const GET_PRODUCT_FAILURE_action=()=>{
  return {type:GET_PRODUCT_FAILURE} 
 }
export const getProducts =(paramObj)=> (dispatch) => {
  // Complete get products functionality here
dispatch(GET_PRODUCT_FAILURE_action())
axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,paramObj)
.then((res)=>{
  dispatch(GET_PRODUCT_SUCCESS_action(res.data))
  // console.log(res.data);
}).catch((err)=>{
  dispatch(GET_PRODUCT_FAILURE_action())
})
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
