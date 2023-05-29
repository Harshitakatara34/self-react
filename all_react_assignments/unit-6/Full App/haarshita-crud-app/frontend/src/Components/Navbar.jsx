import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/notes">Notes Data</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/create">Add New</Link>
    </div>
  )
}

export default Navbar