import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
