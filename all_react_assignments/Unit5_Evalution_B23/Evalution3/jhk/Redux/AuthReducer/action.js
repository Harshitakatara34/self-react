import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios"
const loginRequest=()=>{
  return {type:LOGIN_REQUEST}
}
const loginFailure=()=>{
  return {type:LOGIN_FAILURE}
}
const loginSuccess=(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
}

export const login = (useData)=>(dispatch) => {
  // Complete login logic here
  dispatch(loginRequest());

  return axios.post("https://reqres.in/api/login",useData)
  .then((res)=>{
    dispatch(loginSuccess(res.data.token))
  })
  .catch(()=>{
    dispatch(loginFailure())
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
