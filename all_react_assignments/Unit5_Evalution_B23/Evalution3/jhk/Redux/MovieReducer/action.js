import { MOVIE_FAILURE, MOVIE_REQUEST, MOVIE_SUCCESS } from "./actionTypes";
import axios from "axios"
const movieRequestPending=()=>{
  return {type:MOVIE_REQUEST}
}
const movieRequestFailure=()=>{
  return {type:MOVIE_FAILURE}
}
const movieRequestSuccess=(payload)=>{
  return {type:MOVIE_SUCCESS,payload}
}

export const getMovies = (paramObj)=>(dispatch) => {
  // Complete the getMovies logic here
dispatch(movieRequestPending())
axios.get(` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`
,paramObj)
.then((res)=>{
  dispatch(movieRequestSuccess(res.data))
  return res.data
}).catch(()=>{
  dispatch(movieRequestFailure())
})
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
