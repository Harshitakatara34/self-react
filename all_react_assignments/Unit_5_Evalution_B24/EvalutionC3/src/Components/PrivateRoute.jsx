import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const location=useLocation()
  const isAuth=useSelector((state)=>state.authReducer.isAuth)
  return !isAuth?<Navigate to={"/login"} state={location.pathname} replace/>:children
};
