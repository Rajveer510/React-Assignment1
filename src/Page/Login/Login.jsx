import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import "../../App";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Logged in as ${email}`);
    navigate("/Home");
  };

  const goToRegister = () => {
    navigate("/App");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <span
            onClick={goToRegister}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
