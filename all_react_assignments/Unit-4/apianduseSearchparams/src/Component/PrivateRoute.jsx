import { useContext } from "react"
import { AuthContext } from "../Context.jsx/AuthContextProvider"
import { Navigate } from "react-router-dom"



function PrivateRoute({children}){
const {isAuth}=useContext(AuthContext)

return !isAuth ? <Navigate to='/login'/>:children;
}
export default PrivateRoute