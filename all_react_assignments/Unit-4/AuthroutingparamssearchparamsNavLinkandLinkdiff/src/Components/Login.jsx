import React from 'react'
import {useContext} from "react"
import { AuthContext } from '../Context/AuthContext'
const Login = () => {
  const{login,isAuth}=useContext(AuthContext)
  return (
    <div style={{backgroundColor:"teal",height:"800px",marginTop:"0px"}}>
        <span style={{fontSize:"40px"}}>Login Page</span><br/>
       <button style={{height:"30px",width:"200px",backgroundColor:"black",color:"white",fontSize:"20px",marginTop:"20px"}}disabled={isAuth}onClick={login}>Login</button>
    <br/>

   <h2>{!isAuth ?<h1> 😝ooo..o..oo First You have to Login</h1>:<h1>🥳 hurray!!! Welcome</h1>}
  </h2>  </div>
  )
}

export default Login