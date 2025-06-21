// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h4>HuggebyRoop</h4>
      </div>
      <div className="menu">
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/details">Page Details</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navbar;
