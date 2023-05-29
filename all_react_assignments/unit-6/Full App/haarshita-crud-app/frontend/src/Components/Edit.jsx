import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Edit = () => {
    const token = localStorage.getItem('token');
    const[edit,setEdit]=useState({
        "title":"",
        "author":""
    })

    let { id } = useParams();
    const fetchedData=()=>{
        fetch(`https://fair-gray-swallow-yoke.cyclic.app/notes`, {
            method:"GET",
            headers:{
                "Content-type":"application/json",
               "Authorization": token
            }
        
         }) 
         .then((res) => res.json())
         .then((data)=> {
            console.log(data)
            let filterData= data.filter((el,i)=> {
                return el._id===id
             })
            setEdit(filterData[0])
         })
         .catch((err) => console.log(err))
    }
    useEffect(() => {
      fetchedData()
    }, [])

    const handleChange=(e)=>{
const{value,name}=e.target
setEdit({...edit,[name]:value})
    }

    const handleSubmit=(e)=>{
   e.preventDefault()
    fetch(`https://fair-gray-swallow-yoke.cyclic.app/notes/${id}` , {
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
           "Authorization": token
        },
        body:JSON.stringify(edit)
     }) 
     .then((res) =>res.json())
     .then((data)=> {
     alert(data.msg)
    
     })
     .catch((err) => console.log(err))


    }
console.log(edit)
    const{title,author}=edit
  return (
    <div>
    <h1>{id}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Author name"
          value={author}
          name="author"
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    
    </div>
  );
  
}

export default Edit