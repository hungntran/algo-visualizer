import classNames from "classnames";
import React from "react";

const legendDisplayMap = [
  {
    text: "Compare",
    color: "bg-tertiary-400 border-tertiary-700",
  },
  {
    text: "Swap",
    color: "bg-custom-400 border-custom-700",
  },
  {
    text: "Sorted",
    color: "bg-green-300 border-green-600",
  },
];

const Legend = () => {
  return (
    <div className="absolute invisible md:visible top-0 left-0 bg-white dark:bg-gray-700 rounded-tl-md rounded-br-md shadow-md p-0.5">
      {legendDisplayMap.map((item) => (
        <div key={item.text} className="flex gap-x-2 items-center px-2 py-1">
          <div className={classNames("w-4 h-4 border-2", item.color)}></div>
          <div className="text-sm">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Legend;
