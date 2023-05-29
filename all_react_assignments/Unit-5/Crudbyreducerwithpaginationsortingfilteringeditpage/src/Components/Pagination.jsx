import React from 'react'
import {useSelector} from "react-redux"
import {useSearchParams} from "react-router-dom"

const Pagination = ({page,setPage}) => {
   
    const{totalPage}=useSelector((store)=>store.ProductReducer)
 let AllPages=Math.ceil(totalPage/2)
 let arr=new Array(AllPages).fill(0)
 console.log(page)
    return (
    <div>
      {arr.map((e,index)=>{
        return(
            <>
            <button bg={page===(index+1)?"red":"green"} onClick={()=>setPage(index+1)}>{index+1}</button>
            </>
        )
       
      })}
    </div>
  )
}

export default Pagination
