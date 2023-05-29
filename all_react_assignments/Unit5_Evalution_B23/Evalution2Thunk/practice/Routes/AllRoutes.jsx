import React from "react";
import { Routes, Route } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import EmployeeData from "../Components/EmployeeData";
import RestaurantData from "../Components/RestaurantData";

const AllRoutes = () => {
  return <div>
    {/* Add Routes here */}
    <Routes>
      <Route path={"/coffee-data"} element={<CoffeeData />} />
      <Route path={"/employee-data"} element={<EmployeeData />} />
      <Route path={"/restaurant-data"} element={<RestaurantData />} />
    </Routes>

  </div>;
};

export { AllRoutes };
