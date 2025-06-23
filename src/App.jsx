import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Home from "./Page/Home/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Re-check login status on every route change
    const status = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(status);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
