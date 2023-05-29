import Home from '../Components/Home';
import {Routes,Route} from "react-router-dom"
import About from '../Components/About';
import Users from '../Components/Users';
import Login from '../Components/Login';
import Contact from '../Components/Contact';
import UsersPage from '../Components/UsersPage';
import Notfound from '../Components/Notfound';
import PrivateRoute from './PrivateRoute';

function AllRoutes(){
    return(
        <div>
             <Routes>
        <Route path="/" element={
        <PrivateRoute>
          <Home/>
          </PrivateRoute>}/>
       
        <Route path="/about" element={<PrivateRoute>
          <About/>
          </PrivateRoute>}/>
        <Route path="/users" element={ <PrivateRoute>
          <Users/>
          </PrivateRoute>}/>
        <Route path="/contact" element={ <PrivateRoute>
          <Contact/>
          </PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
      <Route path="/users/:user_id" element={ <PrivateRoute>
          <UsersPage/>
          </PrivateRoute>}/>
      <Route path="*" element={<Notfound/>}/>
      </Routes>
        </div>
    )
}
export default AllRoutes