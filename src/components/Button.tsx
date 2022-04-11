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
      className={classNames(
        className,
        "px-5 hover:bg-primary-600 active:bg-primary-700 font-semibold rounded-md h-9",
        {
          "border-2 border-primary-500 hover:text-white": isOutline,
          "bg-primary-500 text-white": !isOutline,
          "opacity-75 cursor-not-allowed": isDisabled,
        }
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
