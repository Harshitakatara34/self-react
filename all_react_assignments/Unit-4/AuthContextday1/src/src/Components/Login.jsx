import React from 'react'
import {AuthContext} from "../Context/AuthContextProvider"
import { useContext,useState } from 'react';
export default function Login() {
    const [text,setText]=useState({});
    // console.log(AuthContext);
    const {login}=useContext(AuthContext);
    const handleChange=(e)=>{
        let input=e.target.name;
        let val=e.target.value;
        setText({...text,[input]:val})
    }
    const getData=(text)=>{
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(text),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json())
        .then((res)=>{if(res.token)login(res.token);
        else console.log("user not exist")})
        .catch((e)=>console.log("error is",e));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(text);
        getData(text);
    }
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input
                    onChange={handleChange}
                    type = "email"
                    name="email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    onChange={handleChange}
                    name="password"
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
