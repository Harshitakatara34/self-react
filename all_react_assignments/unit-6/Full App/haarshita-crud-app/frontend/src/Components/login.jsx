import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
    const [form, setform] = useState({
     "email" : "hmahilange9802@gmail.com",
     "password" : "123",    
    })
    const handleChange=(e)=>{
         const {name,value }=e.target;
        
         setform({...form,[name] : value });
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://fair-gray-swallow-yoke.cyclic.app/login", form)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token",(res.data.token))
          })
          .catch((err) => {
            console.log(err);
          });
      }
 
     const { email,password }=form;
   return (
     <div> 
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
       
              <label>email</label><br/> 
              <input  type="string"  placeholder='Enter email' name="email" value={email}  onChange={handleChange}/><br/> 
              <label>pass</label><br/> 
              <input  type="string"  placeholder='Enter pass' name="password" value={password}  onChange={handleChange}/><br/> 
              
              <input type="submit" value="Login"/>
          </form>
     </div>
   )
 }
 
 export default Login