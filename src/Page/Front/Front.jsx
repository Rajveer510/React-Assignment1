import { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Button from "./components/Button/Button";
// import Card from "../src/components/Card/Card";
// import one from "../src/assets/images/one.jpg";
// import Input from "./components/Input/Input";
// import TableComponent from "./components/Table/Table";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import Registration from "./Page/Registration/Registration";

function App() {
  // You can remove the count state if it's not used
  // const [count, setCount] = useState(0);

  // Other components such as Navbar, Card, etc. are commented out.

  return (
    <div>
      <Router>
        <Routes>
          {/* The default path "/" now points to the Login component */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
