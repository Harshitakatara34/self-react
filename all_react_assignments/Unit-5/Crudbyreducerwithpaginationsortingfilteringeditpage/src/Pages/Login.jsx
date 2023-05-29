import React from 'react'
import { login } from '../Redux/authReducer.js/action'
import {useSelector,useDispatch} from "react-redux"
import {useState} from "react"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import styled from "styled-components"
export const Login = () => {
  const navigate=useNavigate()
  const[email,setEmail]= useState("")
  const[password,setPassword]=useState("")
 const {auth}=useSelector(store=>store.authReducer)
const location=useLocation()
console.log(location)
 const dispatch=useDispatch()
  const handleSubmit=(e)=>{
e.preventDefault();
const userData={
  email,
  password,
}
dispatch(login(userData)).then(()=>{
  navigate(location.state,{replace:true})
})
console.log(userData)
setEmail("")
setPassword("")
 }
  return (
    <DIV auth={auth}>
    <h3>{auth?"login successfull":"login to continue"}</h3>
      <form  onSubmit={handleSubmit}>
        <input type="email" value={email}placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="enter your password"/>
<button type="submit">Log in </button>
      </form>
    </DIV>
  )
}
const DIV =styled.div`
width:400px;
margin:40px auto;
border:1px solid grey;
padding:20px;
h3{
  color:${({auth})=> auth?`green`:`red`}
}
form{
display:flex;
flex-direction:column;
gap:10px;
align-items:center;

}
input{
    width:80%;
    height:40px;
    font-size: large;
}

button{
width:20%;
height:35px
}

`;

