import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  
 const{movie}=useSelector((store)=>store.movieReducer)
  const[searchParams,setSearchParams]=useSearchParams()
  const initialOrder=searchParams.get("order")
  const initialRating=searchParams.getAll("rating")
  const [order,setOrder]=useState(initialOrder||"")
 const[rating,setRating]=useState(initialRating||[])
 const initialSearch=searchParams.get("q")
 const[search,setsearch]=useState(initialSearch||"")
 const handleSort=(e)=>{
setOrder(e.target.value)
  }
  useEffect(()=>{
let params={
 rating,
}
search&&(params.q=search)
order&&(params.order=order)

setSearchParams(params)
  },[order,rating,search])

  const handleChange=(e)=>{
    let newrating=[...rating]
    const value=e.target.value;
    console.log(value)
    if(newrating.includes(value)){
      newrating.splice(newrating.indexOf(value),1)
    }

    else{
      newrating.push(value)
    }
    setRating(newrating)
    }

  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input data-testid="movie-filter-1" checked={rating.includes("1")} type="checkbox" value={"1"} onChange={handleChange}/>
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-2" checked={rating.includes("2")} type="checkbox" value={"2"} onChange={handleChange} />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-3" checked={rating.includes("3")} type="checkbox" value={"3"} onChange={handleChange} />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-4" checked={rating.includes("4")} type="checkbox" value={"4"} onChange={handleChange}/>
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label> 
        <br />
        <input data-testid="movie-filter-5" checked={rating.includes("5")} type="checkbox" value={"5"} onChange={handleChange}/>
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input data-testid="movie-sort-asc" type="radio" value={"asc"} name="sort" defaultChecked={order==="asc"} />
        <label>Ascending</label>
        <br />
        <input data-testid="movie-sort-desc" type="radio" value={"desc"} name="sort" defaultChecked={order==="desc"} />
        <label>Descending</label>
      </div>
      <div>
        <h3>Searching</h3>
        <input type="text" placeholder="Enter year" value={search} onChange={(e)=>setsearch(e.target.value)}/>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
