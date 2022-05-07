import classNames from "classnames";
import React, { FC } from "react";

const Button: FC<{
  text: string;
  isDisabled?: boolean;
  isOutline?: boolean;
  isSecondary?: boolean;
  className?: string;
  onClick?: () => void;
}> = ({ text, onClick, isOutline, className, isSecondary, isDisabled }) => {
  return (
    <button
      className={classNames(className, "px-5 text-sm rounded-md h-8", {
        "border text-primary-400 hover:bg-gray-100": isOutline,
        "text-primary-500 bg-primary-50 hover:bg-primary-100": isSecondary,
        "bg-primary-400 text-white hover:bg-primary-500": !isOutline && !isSecondary,
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
