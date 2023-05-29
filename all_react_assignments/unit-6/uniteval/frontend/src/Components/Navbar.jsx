import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/users/register">Register</Link>
        <Link to="/users/login">Login</Link>
    </>
  )
}

export default Navbar