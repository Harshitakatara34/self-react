import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const LOGIN_REQUEST_action=()=>{
return {type:LOGIN_REQUEST}
}

export const LOGIN_FAILURE_action=()=>{
  return {type:LOGIN_FAILURE}
  }

  export const LOGIN_SUCCESS_action=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
    }
    export const login = (newUser)=>(dispatch) => {
      // Complete login Functionality
      dispatch(LOGIN_REQUEST_action())
    return axios.post(`https://reqres.in/api/login`,newUser).then((res)=>{
      dispatch(LOGIN_SUCCESS_action(res.data.token))
      console.log(res.data.token)
     }).catch((err)=>{
      dispatch(LOGIN_FAILURE_action())
     })
    };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
