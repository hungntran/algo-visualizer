import useGlobal from "hooks/useGlobal";
import React from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useGlobal();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="p-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors rounded-md cursor-pointer"
      onClick={toggleDarkMode}
    >
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default ToggleDarkMode;
