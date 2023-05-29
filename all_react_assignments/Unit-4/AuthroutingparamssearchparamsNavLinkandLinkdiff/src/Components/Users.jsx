import React from 'react'
import {useState,useEffect} from "react"
import {Link,Navigate,useNavigate} from "react-router-dom"
import PrivateRoute from '../Routs/PrivateRoute'
import { useSearchParams } from 'react-router-dom'
const getCurrentPage=(page)=>{
   let  pageNumber=Number(page)
   if(typeof pageNumber!=="number" ||page<=0){
    pageNumber=1
   }
   if(!page){
    pageNumber=1
   }
return pageNumber;

}



const Users = () => {
    const navigate=useNavigate()
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(false)
    const[error,seterror]=useState(false)
      const[searchParams,setsearchparams]=useSearchParams()
      const[page,setpage]=useState( getCurrentPage((searchParams.get("page"))))
     
      const fetchandUpdateData=async(page)=>{
        setloading(true)
        let temp= await fetch(`https://reqres.in/api/users?page=${page}`)
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
fetchandUpdateData(page)
    },[page])
useEffect(()=>{
    setsearchparams({page:page})
},[page])

const total=users.total_pages


   const handlePageChange=(val)=>{
   setpage(page+val)
   }
 
console.log(users.data)
  return loading?<h1>loading.....</h1>:error?<h1>something went wrong</h1>:
  (
    <div style={{backgroundColor:"teal",margin:"0px",height:"800px"}}> 
         <span style={{fontSize:"45px"}}>Users Page</span>
         <div style={{display:"flex",justifyContent:"space-around"}} >
         {users?.data?.map((ele)=>{
            return(
                <div>
            <img src={ele.avatar}/>
            <div style={{paddingTop:"0px",marginTop:"0px"}}>
            <p key={ele.id}>{ele.first_name}</p>
            <Link to={`/users/${ele.id}`}>More info</Link>
            </div>
            </div> 
            )
           
         }
          
        
         )}
        
         </div>
         <button disabled={page==1}onClick={()=>handlePageChange(-1)}>pre</button>
         <button>{page}</button>
<button disabled={page===total}onClick={()=>handlePageChange(1)}>Next</button>
<br/>
         <button style={{marginTop:"80px",height:"25px",width:"180px",backgroundColor:"black",color:"teal"}} onClick={()=>navigate("/")}>go to home page</button>
         <Link to="/about"><button>Go to about page</button></Link>
         
         </div>
  )
}

export default Users

// by Link we have the accessibility to open that in new tab or new window
// by Navigate we don't have this accessibility it's just like a button
