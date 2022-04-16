import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import Container from "./common/Container";

const navigators = [
  {
    path: "/sorting",
    text: "Sorting",
  },
];

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Container>
        <div className="flex items-center gap-x-8 py-4 font-bold text-primary-500">
          <Link to="/">Algo Visualizer</Link>
          {navigators.map(({ path, text }) => (
            <div
              key={text}
              className={classNames("flex items-center", {
                "text-secondary-700": location.pathname.includes(path),
              })}
            >
              <Link to={path}>{text}</Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
