import classNames from "classnames";
import { FC } from "react";

const Bar: FC<{
  value: number;
  order: number;
  isComparing: boolean;
  isSorted: boolean;
  isSwapping: boolean;
  isWatching: boolean;
}> = ({ value, order, isComparing, isSorted, isSwapping, isWatching }) => {
  return (
    <div
      className={classNames(
        "w-6 border-2 border-b-0 text-white text-sm font-semibold text-center rounded-t-md transition-all absolute",
        {
          "bg-primary-500 border-primary-800": !isComparing && !isSorted && !isSwapping,
          "bg-custom-400 border-custom-700": isSwapping,
          "bg-tertiary-400 border-tertiary-700": isComparing && !isWatching,
          "bg-violet-400 border-violet-700": isWatching && !isSorted,
          "bg-secondary-400 border-secondary-700": isSorted && !isComparing && !isSwapping,
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
