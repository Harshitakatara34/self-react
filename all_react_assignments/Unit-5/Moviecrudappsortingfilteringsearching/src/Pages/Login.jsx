import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"

import { useLocation, useNavigate } from "react-router-dom";
// Complete the logic do not remove any data-testid
import { login } from "../Redux/AuthReducer/action";
export const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  const handleSubmit=()=>{
  let obj={
    email,
    password,
  }
  dispatch(login(obj)).then(()=>{
    navigate(location.state,{replace:true})
  })
  }
  console.log(location)
  return (
    <div>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleSubmit}>Log In</button>
    </div>
  );
};
