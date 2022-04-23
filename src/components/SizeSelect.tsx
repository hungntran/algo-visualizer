import React, { FC } from "react";
import classNames from "classnames";
import useGlobal from "hooks/useGlobal";

const buttons = [5, 10, 15, 20, 25];

const SizeSelect: FC<{
  onSelect?: (size: number) => void;
}> = ({ onSelect }) => {
  const { listSize, setListSize } = useGlobal();

  return (
    <div
      className="absolute top-0 left-1/2 flex bg-white border rounded-b-md shadow-md z-10"
      style={{ transform: "translateX(-50%)" }}
    >
      {buttons.map((item) => {
        return (
          <button
            key={item}
            className={classNames("px-2 py-0.5 text-sm w-9 transition-colors", {
              "bg-primary-400 hover:bg-primary-500 text-white": listSize === item,
              "hover:bg-gray-100": listSize !== item,
            })}
            onClick={() => {
              setListSize(item);
              onSelect && onSelect(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default SizeSelect;
