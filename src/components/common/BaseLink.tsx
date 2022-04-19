import React, { FC } from "react";

const BaseLink: FC<{ href: string }> = ({ children, href }) => {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default BaseLink;
