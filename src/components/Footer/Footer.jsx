import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo">
        <img src={logo} alt="Logo" />
        <h2>HugByRoop</h2>
      </div>
      <div className="footer-section about">
        <h4>About</h4>
        <p>We create modern solutions for your daily needs with elegance and speed.</p>
      </div>
      <div className="footer-section social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-section contact">
        <h4>Contact</h4>
        <p>Email: rajveerrayat9@.com</p>
        <p>Phone: +91-1234567899</p>
      </div>
    </footer>
  );
};

export default Footer;
