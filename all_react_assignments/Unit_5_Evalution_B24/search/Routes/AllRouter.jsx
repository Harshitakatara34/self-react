import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Admin from "../Components/Admin";
import SingleProduct from "../Components/SingleProduct";
import EditProduct from "../Components/EditProduct";
import Login from "../Components/Login";
import PrivateRouter from "../Hoc/PrivateRouter";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/admin"
        element={
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        }
      />
      <Route
        path="/products/:id"
        element={
          <PrivateRouter>
            <SingleProduct />
          </PrivateRouter>
        }
      />
      <Route
        path="/products/:id/edit"
        element={
          <PrivateRouter>
            <EditProduct />
          </PrivateRouter>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default AllRouter;
