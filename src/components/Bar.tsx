import classNames from "classnames";
import { FC } from "react";

const Bar: FC<{
  value: number;
  order: number;
  isComparing: boolean;
  isSorted: boolean;
  isSwapping: boolean;
}> = ({ value, order, isComparing, isSorted, isSwapping }) => {
  return (
    <div
      className={classNames(
        "w-6 border-2 border-b-0 text-white text-sm font-semibold text-center rounded-t-md transition-all absolute",
        {
          "bg-primary-500 border-primary-800":
            !isComparing && !isSorted && !isSwapping,
          "bg-tertiary-400 border-tertiary-700": isSwapping,
          "bg-tertiary-500 border-tertiary-800": isComparing,
          "bg-secondary-400 border-secondary-700": isSorted,
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
