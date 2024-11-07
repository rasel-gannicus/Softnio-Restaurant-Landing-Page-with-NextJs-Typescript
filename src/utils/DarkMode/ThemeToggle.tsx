"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-slate-900 dark:bg-gray-100 rounded"
    >
      {theme === "dark" ? (
        <IoSunny className="w-5 h-5 text-orange-400" />
      ) : (
        <FaMoon className=" w-5 h-5 text-white" />
      )}
    </button>
  );
};
