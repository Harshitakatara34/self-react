import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { store } from "../Redux/store";

// Complete the logic do not remove any data-testid

export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");
  const location=useLocation()

  const navigate=useNavigate()
const isAuth=useSelector((store)=>store.authReducer.isAuth)
console.log(isAuth)

  const dispatch=useDispatch()
  const userData={
    email,
    password
  }
  const handleLogin=()=>{
    dispatch(login(userData)).then(()=>{
      console.log(location)
      navigate(location.state,{replace:true})
    })
  }
  return (
    <div>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" 
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </div>
  );
};
