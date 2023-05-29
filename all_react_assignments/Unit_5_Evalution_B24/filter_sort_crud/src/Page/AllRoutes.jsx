import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from './Home'
import { Login } from './Login'
import { Admins } from './Admins'
import { PrivateRoute } from '../Component/PrivateRoute'
export const AllRoutes = () => {
  return <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/add-product' element={
  <PrivateRoute>
    <Admins/>
  </PrivateRoute>
}/>
<Route path='*' element={<h1>404 Page Not Found</h1>}/>
  </Routes>
}
