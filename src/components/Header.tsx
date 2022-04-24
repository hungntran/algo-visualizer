import React from "react";
import { Link } from "react-router-dom";
import Container from "./common/Container";
import BaseLink from "./common/BaseLink";
import Logo from "assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center gap-x-8 py-4 font-semibold">
            <Link to="/" className="hover:text-primary-400">
              <div className="flex items-center">
                <img src={Logo} alt="logo" width={32} />
                <span className="ml-2">AlgoVisual</span>
              </div>
            </Link>
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
