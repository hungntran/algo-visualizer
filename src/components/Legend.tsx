import classNames from "classnames";
import React from "react";

const legendDisplayMap = [
  {
    text: "Compare",
    color: "bg-tertiary-500 border-tertiary-800",
  },
  {
    text: "Swap",
    color: "bg-custom-400 border-custom-700",
  },
  {
    text: "Sorted",
    color: "bg-secondary-400 border-secondary-700",
  },
];

const Legend = () => {
  return (
    <div className="absolute top-0 left-4 border-2 border-primary-500 rounded-tl-md rounded-br-md">
      {legendDisplayMap.map((item) => (
        <div className="flex gap-x-2 items-center px-2 py-1">
          <div className={classNames("w-4 h-4 border-2", item.color)}></div>
          <div className="text-sm font-semibold">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Legend;
