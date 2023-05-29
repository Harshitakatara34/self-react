import React,{useContext} from 'react'
import {AuthContext} from "../Context/AuthContextProvider"

export const Dashboard = () => {
    const {isAuth,logout}=useContext(AuthContext);
    return (
        <div >
            <h3 data-testid = "token" >Token:{isAuth.token} </h3>
            <button data-testid = "logout" onClick={()=>logout()} >LOGOUT</button>
        </div>
    )
}
