import classNames from "classnames";
import React, { FC } from "react";

const GradientText: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <span className={classNames("bg-clip-text text-transparent bg-gradient-to-r", className)}>
      {children}
    </span>
  );
};

export default GradientText;
