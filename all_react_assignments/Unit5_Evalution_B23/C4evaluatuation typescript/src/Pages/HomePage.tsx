import React from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";

export const HomePage = () => {
  return (
    <div>
      <Navbar pageName={"Home Page"} />
      <ProductList />
    </div>
  );
};
