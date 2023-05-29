import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const  Notes = () => {
    const[data,setData]=useState([])
    const token = localStorage.getItem("token")
    console.log(token);
    const fetchedData=()=>{
        fetch("https://fair-gray-swallow-yoke.cyclic.app/notes" , {
            method:"GET",
            headers:{
               "Authorization": token
            }
        
         }) 
         .then((res) => res.json())
         .then((data)=> {
          setData(data);
          console.log(data)
         })
         .catch((err) => console.log(err))
    }
    useEffect(() => {
      fetchedData()
    }, [])

    const handleDelete=(id)=>{
        fetch(`https://fair-gray-swallow-yoke.cyclic.app/notes/${id}` , {
            method:"DELETE",
            headers:{
               "Authorization": token
            }
        
         }) 
         .then((res) =>res.json())
         .then((data)=> {
         console.log(data)
       
        //   setnotes(data)
         })
         .then(()=>{
            fetchedData()
         })
         .catch((err) => console.log(err))
    }
    
   


    

  return (
    <div>
   
    <div>
      <h1>HOME PAGE</h1>
 
      {data.map((el)=>{
        return(
            <div key={el._id} >
                <h1>{el.authorId}</h1>
                <h1>{el.author}</h1>
                <h1>{el.title}</h1>
            <button onClick={()=>handleDelete(el._id)}>Delete</button>
             <Link to={`/edit/${el._id}`}><button>Edit</button>  </Link>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Notes