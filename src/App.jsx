import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import Registration from "./Page/Registration/Registration";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Detail from "./Page/Details/Details";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Connect } from "./Page/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Detail/>
      <Connect/>
      <Footer/>

    </div>
  );
};

export default App;
