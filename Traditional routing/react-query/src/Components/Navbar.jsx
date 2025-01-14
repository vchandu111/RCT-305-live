import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/posts">Posts</NavLink>
      <NavLink className="nav-link" to="/posts-rq">Posts RQ</NavLink>
    </nav>
  );
};

export default Navbar;
