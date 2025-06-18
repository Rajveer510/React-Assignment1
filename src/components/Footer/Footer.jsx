import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>HuggebyRoop</h3>
        <p>
          Bringing timeless beauty to fabric with handcrafted embroidery made
          with care and creativity.
        </p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <a href="#">rajveerrayat8@gmai.com</a>
          </li>
          <li>
            <a href="#">+91 6545824436</a>
          </li>
          <li>
            <a href="#">V.P.O Kotla Nihang Punjab,140001</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
