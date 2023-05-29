import React from 'react'
import {useState,useEffect} from "react"


import { useParams } from 'react-router-dom'
const UsersPage = () => {
  const {user_id}=useParams()
  console.log(user_id)
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(false)
    const[error,seterror]=useState(false)
    const fetchandUpdateData=async()=>{
        setloading(true)
        let temp= await fetch(`https://reqres.in/api/users/${user_id}`)
        let data=await temp.json()
            console.log(data)
            setusers(data)
         setloading(false)
    .catch((err)=>{
        console.log(err)
        seterror(true)
        
    })
    .finally(()=>setloading(false))
}
console.log(users)
    useEffect(()=>{
fetchandUpdateData()
    },[])

console.log(users.data)
  return loading?<h1>loading.....</h1>:error?<h1>something went wrong</h1>:
  (
    <div> 
         <h1>Users Page</h1>
      <img src={users?.data?.avatar}/>   
      <p>{users?.data?.email}</p>
         
          
           
         
         
         </div>
  )
}

export default UsersPage