import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const MovieCard = ({id,Title,Year,imdbID,Poster,Type,rating}) => {
  
  return <div className={"movie-card"}>
  <DIV >
  <Link to={`/movie/${id}`}><img src={Poster} alt="movies"/></Link>
    <p class="movie-name">{Title}</p>
    <p class="movie-year">{Year}</p>
    <p>{imdbID}</p>
    <p class="movie-type">{Type}</p>
    <p class="movie-rating">{rating}</p>
  </DIV>
   
  </div>;
};
const DIV=styled.div`
  border: 1px solid grey;
    padding:10px;
    width: 300px;
  img{
    width: 100%;
    height:300px ;
  }`