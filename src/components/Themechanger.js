import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Themechanger() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      type="button"
      className="btn btn-secondary ms-2"
      style={{ border: "2px solid black" }}
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default Themechanger;
