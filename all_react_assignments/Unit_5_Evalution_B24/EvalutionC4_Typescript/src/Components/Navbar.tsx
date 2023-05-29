import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
// accept the page name as prop here
export const Navbar = () => {
 
  const location = useLocation();
 

  return (
    <div>
      <h2>Product List</h2>
      <a className="home-link" href="/" >
        Home
      </a>
      <a
        className="add-product-link"
       
        href="/add-product"
      >
        Add Product
      </a>
      <h3 data-testid="page-name">
        {location.pathname == "/add-product" ? "Add Product Page" : "Home Page"}
      </h3>
    </div>
  );
};
