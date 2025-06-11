import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
//import Card from "./components/Card/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        //<Card/>
      </div>
    </>
  );
}

export default App;
