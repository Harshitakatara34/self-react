import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [search,setSearch]=useState()
  const [searchParams,setSearchParams]=useSearchParams();
  const intialState=searchParams.getAll("rating").map(Number)
  const intialOrder=searchParams.get("order")
  const [rating,setRating]=useState(intialState||[])
  const [order,setOrder]=useState(intialOrder||"")
  console.log(rating)
  const handleRating=(e)=>{
    const newRating=[...rating]
    const value=+e.target.value
    if(newRating.includes(value)){
      newRating.splice(newRating.indexOf(value),1)
    }else{
      newRating.push(value)
    }
    setRating(newRating)
  }
  const handleSort=(e)=>{
const value=e.target.value
console.log(value)
setOrder(value)
  }
  useEffect(()=>{
const params={
rating,

}
order&&(params.order=order)
search&&(params.q=search)
setSearchParams(params)
  },[rating,order,search])
  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input data-testid="movie-filter-1" type="checkbox"
        value={1} onChange={handleRating} checked={rating.includes(1)} />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-2" type="checkbox" 
        value={2} onChange={handleRating} checked={rating.includes(2)}/>
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-3" type="checkbox"
         value={3} onChange={handleRating} checked={rating.includes(3)} />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-4" type="checkbox"
         value={4} onChange={handleRating} checked={rating.includes(4)} />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"
         value={5} onChange={handleRating} checked={rating.includes(5)} />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input data-testid="movie-sort-asc" type="radio"
        name="sort" value={"asc"} defaultChecked={order==="asc"}/>
        <label>Ascending</label>
        <br />
        <input data-testid="movie-sort-desc" type="radio"
        name="sort" value={"desc"} defaultChecked={order==="desc"} />
        <label>Descending</label>
      </div>
      <div>
        <h3>Searching</h3>
        <input type="text" placeholder="Enter year"
         value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
