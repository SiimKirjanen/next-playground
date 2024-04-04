"use client";

import { ThemeContext } from "@/_context/ThemeContext";
import React, { useContext } from "react";

function ClientComp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h4>Current theme is {theme} </h4>
      <button
        onClick={toggleTheme}
        className="rounded bg-red-500 px-3 py-2 font-bold text-white hover:bg-red-700"
      >
        Toggle theme
      </button>
    </>
  );
}

export default ClientComp;
