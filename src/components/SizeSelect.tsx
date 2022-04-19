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
      className="absolute top-0 left-1/2 flex border-x-2 border-b-2 border-primary-500 rounded-b-md z-10"
      style={{ transform: "translateX(-50%)" }}
    >
      {buttons.map((item) => {
        return (
          <button
            key={item}
            className={classNames("px-2 py-0.5 text-sm w-9 transition-colors font-semibold", {
              "bg-primary-400 text-white": listSize === item,
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
