import React from 'react'
import Login from './Components/Login'
import {AuthContext} from "./Context/AuthContextProvider"
import { useContext } from 'react';
import { Dashboard } from './Components/Dashboard';

export default function App() {
const {isAuth}=useContext(AuthContext);
// console.log(isAuth.status,"apppppp")
  return (
    <div>
       {isAuth.status===true?<Dashboard />:<Login />} 
    </div>
  )
}
