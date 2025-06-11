import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.pang" alt="logo" />
        HuggebyRoop
      </div>
      <ul className="navbar-links">
        <li>
          <a className="navbar-links" href="">
            Home
          </a>
        </li>
        <li>
          <a className="navbar-links" href="">
            About
          </a>
        </li>
        <li>
          <a className="navbar-links" href="">
            Page Details
          </a>
        </li>
        <li>
          <a className="navbar-links" href="">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};
