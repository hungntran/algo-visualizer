import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import Container from "./common/Container";
import BaseLink from "./common/BaseLink";

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
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center gap-x-8 py-4 font-bold">
            <Link to="/">Algo Visualizer</Link>
            {navigators.map(({ path, text }) => (
              <div
                key={text}
                className={classNames("flex items-center px-3 py-1 rounded-md transition-all", {
                  "ring-2 ring-primary-500": location.pathname.includes(path),
                })}
              >
                <Link to={path}>{text}</Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            Made with ❤️ by{" "}
            <BaseLink href="https://github.com/hungdotjs" className="font-semibold">
              hungdotjs
            </BaseLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
