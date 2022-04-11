import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-14 flex items-center gap-x-8 px-6 font-semibold text-primary-500 shadow-sm">
      <Link to="/">Algo Visualizer</Link>
      <Link to="/sorting">Sorting</Link>
    </div>
  );
};

export default Header;
