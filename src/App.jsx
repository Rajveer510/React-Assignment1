import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import Registration from "./Page/Registration/Registration";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Detail from "./Page/Details/Details";
import { Connect } from "./Page/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Details" element={<Detail />} />
        <Route path="/Contact" element={<Connect />} />
      </Routes>
    </Router>
  );
};

export default App;
