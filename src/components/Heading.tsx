import React, { FC } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "./icons/ArrowBackIcon";

const Heading: FC<{ text: string; backLink: string }> = ({ text, backLink }) => {
  return (
    <div className="relative">
      <h1 className="text-3xl font-semibold text-center my-7">{text}</h1>
      <Link to={backLink}>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer p-1.5 dark:hover:bg-gray-600 hover:bg-gray-100 rounded-md">
          <ArrowBackIcon />
        </div>
      </Link>
    </div>
  );
};

export default Heading;
