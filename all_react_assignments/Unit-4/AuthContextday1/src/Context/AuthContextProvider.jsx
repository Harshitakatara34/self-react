import React, {useState} from 'react'
import {createContext} from "react"
export const AuthContext=createContext()
export default function AuthContextProvider({children}) {
const[token,settoken]=useState("")
  return (
    <div>
    <AuthContext.Provider value={{token,settoken}}>
{children}
    </AuthContext.Provider>

    </div>
  )
}
