import classNames from "classnames";
import React, { FC } from "react";

const Button: FC<{
  text: string;
  isDisabled?: boolean;
  isOutline?: boolean;
  className?: string;
  onClick?: () => void;
}> = ({ text, onClick, isOutline, className, isDisabled }) => {
  return (
    <button
      className={classNames(className, "px-5 text-sm rounded-md h-8", {
        "border text-primary-400 hover:bg-gray-100": isOutline,
        "bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600": !isOutline,
        "opacity-75 cursor-not-allowed": isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
