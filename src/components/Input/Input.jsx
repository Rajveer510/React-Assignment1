import React, { useState } from "react";
import './Input.css'

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={handleChange}
      />
      <p> you typed:{value}</p>
    </div>
  );
};

export default Input;
