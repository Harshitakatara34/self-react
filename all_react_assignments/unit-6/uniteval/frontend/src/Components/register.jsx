import React, { useState } from 'react'
import axios from "axios"
const Register = () => {
   const [form, setform] = useState({
    "name" : "",
    "email" : "",
    "password" : "",
    "gender" : ""
   })
   const handleChange=(e)=>{
        const {name,value,type}=e.target;
        let Val=type ==="number" ? Number(value) : value 
        setform({...form,[name] :  Val });
   }
  
   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://cute-ruby-horse-fez.cyclic.app/users/register", form)
      .then((res) => {
        console.log(res);
        alert("registered")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

    const {name,email,password,gender}=form;
  return (
    <div> 
         <h1>Register</h1>
         <form onSubmit={handleSubmit}>
             <label>name</label><br/> 
             <input type="string" placeholder='Enter name' name="name" value={name}  onChange={handleChange}/><br/> 
             <label>email</label><br/> 
             <input  type="string"  placeholder='Enter email' name="email" value={email}  onChange={handleChange}/><br/> 
             <label>password</label><br/> 
             <input  type="string"  placeholder='Enter password' name="password" value={password}  onChange={handleChange}/><br/> 
             <label>age</label><br/> 
             <input placeholder='Enter gender' name="gender" value={gender} onChange={handleChange}/><br/>
             <input type="submit" value="REGISTER"/>
         </form>
    </div>
  )
}

export default Register