import classNames from "classnames";
import React, { FC } from "react";

const Button: FC<{
  text: string;
  isOutline?: boolean;
  onClick?: () => void;
}> = ({ text, onClick, isOutline }) => {
  return (
    <button
      className={classNames(
        "px-5 py-1.5  hover:bg-purple-600 active:bg-purple-700  rounded-md",
        {
          "border-2 border-purple-400 text-purple-500 hover:text-white":
            isOutline,
          "bg-purple-500 text-white": !isOutline,
        }
      )}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
