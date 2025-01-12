import { useState } from "react";
import "./Counter.scss";
import "./Counter.css";
import React from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="btn border" onClick={increment}>
        increment
      </button>
    </div>
  );
};
