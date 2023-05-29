import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = ({id,Title,Year,Type,rating,Poster}) => {
  return <DIV className={"movie-card"}>
    <Link to={`/movie/${id}`}>
      <img src={Poster} alt="Poster" />
    </Link>
    <h3 className={"movie-name"}>{Title}</h3>
    <p className={"movie-year"}>{Year}</p>
    <p className={"movie-type"}>{Type}</p>
    <p className={"movie-rating"}>{rating}</p>
  </DIV>;
};
const DIV=styled.div`
  border: 1px solid grey;
    padding:5px;
    width: 300px;
  img{
    width: 100%;
    height:200px ;
  }
    `
