"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, setTheme } = themeContext;

  return (
    <div className="space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded ${
          theme === "light"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-800"
        }`}
      >
        Light Mode
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded ${
          theme === "dark"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-800"
        }`}
      >
        Dark Mode
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded ${
          theme === "system"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-800"
        }`}
      >
        System Preference
      </button>
    </div>
  );
};
