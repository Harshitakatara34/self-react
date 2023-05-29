import React from 'react'
import {useContext} from "react"
import { AuthContext } from '../Context/AuthContext'
const Home = () => {
  const {logout,isAuth}=useContext(AuthContext)
  return (
   
           <div style={{backgroundColor:"teal",height:"800px",marginTop:"0px"}}>
        <span style={{fontSize:"40px"}}>Login Page</span><br/>
       <button style={{height:"30px",width:"200px",backgroundColor:"black",color:"white",fontSize:"20px",marginTop:"20px"}}disabled={!isAuth}onClick={logout}>logout</button>
       <br/>
       <div style={{marginTop:"20px"}}>

      
       <img style={{height:"300px",width:"400px"}} src="https://tse2.mm.bing.net/th/id/OIP.4qpqGNMSeKZgcoUiJSnTawHaEv?w=247&h=180&c=7&r=0&o=5&pid=1.7"/>
       </div>
    </div>
  )
}

export default Home