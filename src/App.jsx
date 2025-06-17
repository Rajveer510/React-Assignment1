import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Card from "../src/components/Card/Card";
import one from "../src/assets/images/one.jpg";
import Input from "./components/Input/Input";
import TableComponent from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
    { Header: "Roll", accessor: "roll" },
  ];

  const data = [
    { name: "Adksd", age: "25", roll: "frontend" },
    { name: "Adksd", age: "25", roll: "frontend" },
    { name: "Adksd", age: "25", roll: "frontend" },
    { name: "Adksd", age: "25", roll: "frontend" },
    { name: "Adksd", age: "25", roll: "frontend" },
    { name: "Adksd", age: "25", roll: "frontend" },
    { name: "Adksd", age: "25", roll: "frontend" },
  ];

  return (
    <div>
      <Navbar />
      <Card
        title="Nature View"
        content="This is a beautiful view of nature."
        image={one}
      />
      <Input />
      <TableComponent columns={columns} data={data} />
      <Footer />
    </div>
  );
}

export default App;
