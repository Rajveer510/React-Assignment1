import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="logo">HugByRoop</div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`links ${menuOpen ? "show" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Product</a>
        <a href="#contact">Contact</a>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
