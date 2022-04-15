import React, { FC } from "react";
import classNames from "classnames";
import useGlobal from "hooks/useGlobal";
import { TraceSpeed, traceSpeedMapped } from "services/Tracer";

const SpeedSelect: FC<{ onSelect?: (value: TraceSpeed) => void }> = ({ onSelect }) => {
  const { speed, setSpeed } = useGlobal();

  return (
    <div className="flex flex-col absolute right-0 top-0 text-sm border-b-2 border-l-2 rounded-bl-md rounded-tr-md overflow-hidden border-primary-500">
      {Object.values(TraceSpeed).map((item) => (
        <button
          key={item}
          onClick={() => {
            setSpeed(item);
            onSelect && onSelect(item);
          }}
          className={classNames("px-2 py-1 font-semibold transition-colors", {
            "bg-primary-400 text-white": speed === item,
          })}
        >
          {traceSpeedMapped[item]}x
        </button>
      ))}
    </div>
  );
};

export default SpeedSelect;
