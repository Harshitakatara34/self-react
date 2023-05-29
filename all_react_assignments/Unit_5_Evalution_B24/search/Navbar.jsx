import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{justifyContent:"space-between"}}>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        {" "}
        <Link to="/admin">Admin</Link>
      </h1>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
    </div>
  );
};

export default Navbar;
