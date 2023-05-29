import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { store } from "../Redux/store";

export const MovieDetail = () => {
  const {id}=useParams();
  const [movieData,setMovieData]=useState({})
  const movie=useSelector((store)=>store.movieReducer.movies)
  useEffect(()=>{
const movieDetails=movie.find((el)=>el.id===+id)
movieDetails&&setMovieData(movieDetails)
  },[])
  return (
    <DIV>
      <h3 className="movie-id">
        {/* Show Movie Id here, Do not add any extra text */}
        {id}
      </h3>
      {/* Show Movie details here */}
      <img className="movie-image" src={movieData.Poster} alt="Poster" />
      <h3 className="movie-name" >{movieData.Title}</h3>
      <p className="movie-year"></p>
      <p>Type:{movieData.Type}</p>
      <p className="movie-rating">Rating:
      {new Array(movieData.rating).fill(0).map((_,index)=>{
        return "\u2605"
      })}</p>

    </DIV>
  );
};const DIV=styled.div`
  border: 1px solid gray;
  padding: 5px;
`
