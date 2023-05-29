import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const auth = useSelector((state) => state.AuthReducer.auth);
  console.log(auth)
  if (!auth) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRouter;
