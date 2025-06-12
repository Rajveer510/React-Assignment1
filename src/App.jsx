import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Card from "../src/components/Card/Card";
import one from "../src/assets/images/one.jpg";
import Input from "./components/Input/Input";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Card
          title="Nature View"
          content="This is a beautiful view of nature."
          image={one}
        />
        <Input />
      </div>
    </>
  );
}

export default App;
