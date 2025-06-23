import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="logo">HugByRoop</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Product</a>
        <a href="#contact">Contact</a>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
