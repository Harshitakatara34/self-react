import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { MovieList } from "../Components/MovieList";
export const Homepage = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <MovieList />
    </div>
  );
};
