import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import { AddProduct } from "./AddProduct";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
};
