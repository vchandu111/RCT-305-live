import React from "react";
import "../../Styles/Navbar.css";
import { Link,NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Navbar;
