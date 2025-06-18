import React from "react";
import "./Home.css";
import logo from "../../assets/images/logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={logo} alt="Home Visual" />
      </div>
      <div className="home-right">
        <h1>Welcome to Our HugbyRoop</h1>
        <p>
          We offer the best services for your needs. Explore our features and
          discover how we can help you grow. Stay tuned for exciting updates and
          offers!
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Home;
