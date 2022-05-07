import React from "react";
import { Link } from "react-router-dom";
import Container from "./common/Container";
import BaseLink from "./common/BaseLink";
import ToggleDarkMode from "./ToggleDarkMode";
import GithubIcon from "./icons/GithubIcon";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center gap-x-8 py-4 font-semibold">
            <Link to="/" className="hover:text-primary-400">
              <div className="flex items-center">
                <span className="text-lg">AlgoVisual</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-x-2">
            <ToggleDarkMode />
            <BaseLink href="https://github.com/hungdotjs/algo-visualizer">
              <div className="p-1.5 text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors rounded-md cursor-pointer">
                <GithubIcon />
              </div>
            </BaseLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
