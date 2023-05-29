import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
export const login=(newUser)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`https://reqres.in/api/login`,newUser).then((res)=>{
        dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
       
    }).catch((err)=>{
        dispatch({type:LOGIN_FAILURE})
    })
}
