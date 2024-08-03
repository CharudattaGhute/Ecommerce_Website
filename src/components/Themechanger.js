import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Themechanger() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
