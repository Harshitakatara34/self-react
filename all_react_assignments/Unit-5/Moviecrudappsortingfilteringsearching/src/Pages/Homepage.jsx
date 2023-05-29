import React from "react";
import { MovieList } from "../Components/MovieList";
import { Sidebar } from "../Components/Sidebar";
export const Homepage = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <Sidebar />
      <MovieList />
    </div>
  );
};
