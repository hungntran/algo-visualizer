import classNames from "classnames";
import React, { FC } from "react";

const Spinner: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={classNames("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 66 66"
    >
      <circle
        cx="33"
        cy="33"
        fill="none"
        r="28"
        stroke="currentColor"
        strokeWidth="10"
        className="opacity-30"
      />
      <circle
        cx="33"
        cy="33"
        fill="none"
        r="28"
        stroke="currentColor"
        strokeDasharray="40, 134"
        strokeDashoffset="325"
        strokeLinecap="round"
        strokeWidth="10"
        className="opacity-70"
      />
    </svg>
  );
};

export default Spinner;
