import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import Homepage from "./Homepage"
import Admin from './Admin'
import PrivateRoute from '../Components/PrivateRoute'
import EditProduct from './EditProduct'
const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/edit/:id" element={<PrivateRoute><EditProduct/></PrivateRoute>}/>
  <Route path='/login' element={<Login/>}/>
   <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
   <Route path="*" element={<h1>not found</h1>}/>
   </Routes>
  
}

export default MainRoutes
