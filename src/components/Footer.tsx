import React from "react";
import BaseLink from "./common/BaseLink";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-10 py-2">
      Made with ❤️ by
      <BaseLink href="https://github.com/hungdotjs" className="ml-1 font-semibold">
        hungdotjs
      </BaseLink>
    </div>
  );
};

export default Footer;
