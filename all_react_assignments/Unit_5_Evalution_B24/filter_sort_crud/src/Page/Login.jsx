import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { loginUser } from '../Redux/authReducer/action'
import styled from 'styled-components'
import {useLocation,useNavigate} from "react-router-dom"
export const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const isAuth=useSelector((state)=>state.authReducer.isAuth)
const location=useLocation();
//this is for naviagate page from login if isAuth true
const navigate=useNavigate()
console.log("login",location);
// console.log(isAuth);
const dispatch=useDispatch()
    const handleAdd=(e)=>{
e.preventDefault()
const newUser={
    email,
    password
}
dispatch(loginUser(newUser)).then(()=>{
    navigate(location.state)
})
setEmail("")
setPassword("")
    }
  return (
    <DIV isAuth={isAuth}>
        <h2>User Login</h2>
<h3>{isAuth?"Login SucessFul":"Please Try Again"}</h3>
        <FORM onSubmit={handleAdd}>
        <input type="text" placeholder='Enter email' 
        value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input type="password" placeholder='Enter password' value={password}
          onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
        </FORM>
    </DIV>
  )
}
const DIV=styled.div`
    width: 400px;
    margin: auto;
border: 1px solid gray;
    

    input{
        width: 80%;
        height: 40px;
        font-size: large;
    }
    h3{
  color:${({isAuth})=>isAuth?`green`:`red`};
}
    button{
        width:20% ;
        height: 35px;
    }
`
const FORM=styled.form`
         display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
`