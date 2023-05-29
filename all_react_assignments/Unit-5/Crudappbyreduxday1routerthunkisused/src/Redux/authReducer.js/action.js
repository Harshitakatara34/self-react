import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const login=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    axios.post("https://reqres.in/api/login",userData).then((res)=>{
dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    }).catch(()=>{
dispatch({type:LOGIN_FAILURE})
    })
}