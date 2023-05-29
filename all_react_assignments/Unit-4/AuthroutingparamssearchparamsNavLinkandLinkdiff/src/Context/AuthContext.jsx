import React from 'react'
import {useState,createContext} from "react"
// create
export const AuthContext=createContext();

//provide
//CPC-- CREATE, PROVIDE,CONSUME
const AuthContextProvider = ({children}) => {
 const[isAuth,setIsAuth]=useState(false)
 const login=()=>{
setIsAuth(true)
 }
 const logout=()=>{
setIsAuth(false)
 }
    return (
  <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider


//Queryparameters should be used if we refresh the page our page will remain at the same page 