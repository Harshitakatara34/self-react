import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";
import axios from "axios"
export const getMovies = (paramObj)=>(dispatch) => {
  console.log(paramObj)
  // Complete the getMovies logic here
  dispatch({type:PRODUCT_REQUEST})
  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,paramObj).then((res)=>{
    console.log(res)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:PRODUCT_FAILURE})
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
