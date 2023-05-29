import React from "react";
import { Routes } from "react-router-dom";
import { Login } from "./Login";
import { Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { MovieDetail } from "./MovieDetail";
export const MainRoutes = () => {
  return <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/login" element={<Login/>}/>
  <Route path="/movie/:id" element={<MovieDetail/>}/>
  {/* Provide all routes here */}</Routes>;
};
