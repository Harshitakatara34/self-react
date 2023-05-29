import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";
import { MovieDetail } from "../Pages/MovieDetail";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const MovieList = () => {
  const [searchParams]=useSearchParams()
  const location = useLocation()
  console.log(useSearchParams())
  const{movies}=useSelector((store)=>store.movieReducer)
  console.log(movies)
  const dispatch=useDispatch()
  console.log(searchParams.get("order")&&"rating")
  console.log(searchParams.get("order"))
  let obj={
    params:{
      rating:searchParams.getAll("rating"),
      _sort:searchParams.get("order") && "Year",
      _order:searchParams.get("order"),
     q:searchParams.get("q"),
    }
  }
  console.log(obj)
  useEffect(()=>{
    dispatch(getMovies(obj))
  },[location.search])

  return <DIV data-testid="movie-list">
  {/* Map through movie array  */}
  {movies.map((el)=>{
    return(
      <>
        <MovieCard key={Date.now()} {...el}/>
      </>
    )
  })}
  </DIV>;
};
const DIV=styled.div`
margin:30px auto;
margin-left: 30px;
  display: grid;
  grid-template-columns:auto auto auto;
  gap:10px;`