import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
export const MovieDetail = () => {
 const{id}=useParams()
 
 console.log(useParams)
 const[data,setDtata]=useState({})
  const{movies}=useSelector((store)=>store.movieReducer)
  useEffect(()=>{
const data=movies.find((el)=>el.id===+id)
setDtata(data)
  },[])
  console.log(data.Poster)
  return (
    <div>
      <h3 className="movie-id">
      {id}  
        {/* Show Movie Id here, Do not add any extra text */}
      </h3>
  <img class="movie-image" src={data.Poster}/>
  <p class="movie-name">{data.title}</p>
  <p class="movie-year">{data.Year}</p>
  <p class="movie-type">{data.type}</p>
  <p class="movie-rating">{data.rating}</p>
      {/* Show Movie details here */}
    </div>
  );
};
