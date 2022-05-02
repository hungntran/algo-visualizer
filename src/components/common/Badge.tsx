import classNames from "classnames";
import React, { FC } from "react";

const Badge: FC<{
  text: React.ReactNode;
  className?: string;
}> = ({ text, className = "bg-gray-50 text-gray-600 border" }) => {
  return (
    <div
      className={classNames(
        "inline-block items-center justify-center rounded-md px-2 py-0.5 text-center",
        className
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
