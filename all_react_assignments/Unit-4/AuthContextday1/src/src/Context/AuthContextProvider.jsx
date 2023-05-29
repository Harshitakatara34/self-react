import React, {useState,createContext} from 'react'
export const AuthContext=createContext();
export default function AuthContextProvider({children}) {
  const initState={token:"",status:false}
  const [isAuth,setIsAuth]=useState(initState);
  
  const login=(token)=>{
    setIsAuth({token:token,status:true});
    console.log(token,"context api");
  }
  const logout=()=>{
    setIsAuth(initState);
  }
  return (
    <AuthContext.Provider value={{login,logout,isAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
