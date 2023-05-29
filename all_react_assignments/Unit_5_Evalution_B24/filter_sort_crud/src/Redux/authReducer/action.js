import axios from "axios"
import { Login_Failure, Login_Request, Login_Success } from "../authReducer/actionType"
export const loginUser=(newUser)=>(dispatch)=>{
    dispatch({type:Login_Request})
   return axios.post(`https://reqres.in/api/login`,newUser).then((res)=>{
        dispatch({type:Login_Success,payload:res.data.token})
        console.log(res.data.token);
    }).catch((err)=>{
        dispatch({type:Login_Failure})
    })
}