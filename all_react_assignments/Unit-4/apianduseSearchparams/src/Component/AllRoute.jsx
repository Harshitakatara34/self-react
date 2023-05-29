import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import User from '../Pages/User';
import SingleUserPage from "../Pages/SingleUserPage";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
function AllRoute(){
return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
      <PrivateRoute>
          <About/>
      </PrivateRoute>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user' element={
        <PrivateRoute>  <User/></PrivateRoute>
      }/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/user/:user_id" element={
        <PrivateRoute> <SingleUserPage/></PrivateRoute>
       }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
)
}
export default AllRoute