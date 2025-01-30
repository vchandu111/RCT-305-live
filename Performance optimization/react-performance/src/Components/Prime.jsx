import React, { useMemo, useState } from "react";
import { findNthPrime } from "./util";

const Prime = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState("light");
  const prime = useMemo(() => findNthPrime(num), [num]); //heavy calculation
  const style = {
    height: "600px",
    width: "600px",
    padding: "40px",
    border: "3px solid black",
    backgroundColor: theme === "light" ? "white" : "Black",
    color: theme === "light" ? "black" : "white",
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setNum(e.target.value)}
      />
      <h1>Nth Prime number is {prime}</h1>
      <button style={{ padding: "30px" }} onClick={toggleTheme}>
        Toogle {theme === "light" ? "dark" : "light"} Theme
      </button>
    </div>
  );
};

export default Prime;
