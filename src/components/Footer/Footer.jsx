// Footer.jsx
import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flogo">
        <h3>HuggebyRoop</h3>
        <img src={logo} alt="Logo" />
      </div>
      <div className="home">
        <h4>Home</h4>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
