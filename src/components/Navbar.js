import React from "react";
import {NavLink} from "react-router-dom";
//We can also use Link instead of NavLink but it doesn't give a active class on the clicked links.

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <NavLink className="brand-logo">Poki' Times</NavLink>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
