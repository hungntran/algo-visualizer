import classNames from "classnames";
import React, { FC } from "react";

const BaseLink: FC<{ href: string; className?: string }> = ({ children, className, href }) => {
  return (
    <a className={classNames("link", className)} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default BaseLink;
