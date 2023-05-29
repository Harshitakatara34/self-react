import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {useSearchParams} from "react-router-dom"
import { getMovies } from "../Redux/MovieReducer/action";
import { store } from "../Redux/store";
import {MovieCard} from "../Components/MovieCard"
import styled from "styled-components";
export const MovieList = () => {
  const dispatch=useDispatch()
  const movies=useSelector((store)=>store.movieReducer.movies)
  console.log(movies)
  const [searchParams]=useSearchParams()
  const paramObj={
    params:{
      rating:searchParams.getAll("rating"),
      _sort:searchParams.get("order")&&"Year",
      _order:searchParams.get("order"),
      q:searchParams.get("q"),
    }
  }
  useEffect(()=>{
dispatch(getMovies(paramObj));
  },[searchParams])

  return <DIV data-testid="movie-list">{/* Map through movie array  */}.
  {movies.length>0&&movies.map((el)=>{
    return <MovieCard key={el.id} {...el}/>
  })}
  
  </DIV>;
};
const DIV=styled.div`
margin:30px auto;
margin-left: 30px;
  display: grid;
  grid-template-columns:auto auto auto;
  gap: 20px;
`