import useGlobal from "hooks/useGlobal";
import React from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useGlobal();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <div
      className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors rounded-md cursor-pointer"
      onClick={toggleDarkMode}
    >
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default ToggleDarkMode;
