import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import Admin from '../Pages/Admin'
const Navbar = () => {
  return (
    <div>
      <h3>shopping App</h3>
      <Link to={"/"} >Home</Link>
      <Link to ={"/login"}>Login</Link>
    <Link to={"/admin"}>Admin</Link>
    </div>
  )
}
const DIV =styled.div``
export default Navbar
