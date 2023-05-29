import React from "react";
import { Routes } from "react-router-dom";
import { Login } from "./Login";
import { Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { MovieDetail } from "./MovieDetail";
import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/login" element={<Login />} />
    <Route path="/movie/:id" element={
      <PrivateRoute><MovieDetail /></PrivateRoute>
    } />
    <Route path="*" element={<h1>404 Page Not Found</h1>} />

  </Routes>;
};