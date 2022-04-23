import classNames from "classnames";
import React, { FC } from "react";

const Badge: FC<{
  text: React.ReactNode;
  className?: string;
}> = ({ text, className = "bg-gray-100" }) => {
  return (
    <div
      className={classNames(
        "inline-block items-center justify-center rounded-md px-2 py-1 text-center",
        className
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
