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
        "px-5 py-1 hover:bg-primary-600 active:bg-primary-700 rounded-md",
        {
          "border-2 border-primary-500 text-primary-800 hover:text-white":
            isOutline,
          "bg-primary-500 text-white": !isOutline,
        }
      )}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
