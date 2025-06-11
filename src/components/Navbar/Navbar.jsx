import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
        <h4>HuggebyRoop</h4>
      </div>
      <div className="menu">
        <ul className="navbar-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Page Details</a>
          </li>

          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
