import classNames from "classnames";
import React, { FC } from "react";

const Badge: FC<{
  text: React.ReactNode;
  className?: string;
}> = ({ text, className }) => {
  return (
    <div
      className={classNames(
        "inline-block items-center justify-center rounded-md px-2 py-1 bg-gray-100 text-center font-semibold",
        className
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
