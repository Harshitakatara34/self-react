import { useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux"
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const location=useLocation();
  const dispatch=useDispatch()
const handleSubmit=(e)=>{
  e.preventDefault()
  let newUser={
    email,
    password
  }
  dispatch(login(newUser)).then(()=>{
   navigate(location.state)
  })
}
  
  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} data-testid="user-login">Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
