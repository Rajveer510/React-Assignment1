import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>HugbyRoop</h3>
        <img src={logo} />
        <p>© 2025 MyWebsite. All rights reserved.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="#">www.roopcreations28.com</a></li>
          <li><a href="#">For more information Call us : <br/>
            +91 98542685</a></li>
          <li><a href="#">Adress : V.P.O Kotla Nihang Rupnagar Punjab,140001 </a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
