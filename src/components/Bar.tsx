import classNames from "classnames";
import { FC } from "react";

const Bar: FC<{
  value: number;
  order: number;
  isComparing: boolean;
  isSorted: boolean;
}> = ({ value, order, isComparing, isSorted }) => {
  return (
    <div
      className={classNames(
        "w-6 border-2 border-b-0 text-white text-sm font-semibold text-center rounded-t-md transition-all absolute",
        {
          "bg-purple-400 border-purple-600": !isComparing && !isSorted,
          "bg-yellow-400 border-yellow-600": isComparing,
          "bg-green-400 border-green-600": isSorted,
        }
      )}
      style={{
        left: 30 * order,
        height: value * 10,
      }}
    >
      {value}
    </div>
  );
};
export default Bar;
