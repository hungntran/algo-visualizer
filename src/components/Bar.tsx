import classNames from "classnames";
import { FC } from "react";
import Show from "components/common/Show";
import useGlobal from "hooks/useGlobal";

const TOTAL_WIDTH = 30;

const Bar: FC<{
  value: number;
  order: number;
  isComparing: boolean;
  isSorted: boolean;
  isSwapping: boolean;
  isWatching: boolean;
}> = ({ value, order, isComparing, isSorted, isSwapping, isWatching }) => {
  const { listSize } = useGlobal();

  return (
    <div
      className={classNames(
        "w-6 border border-b-0 font-semibold text-xs flex items-end justify-center rounded-t-md transition-all absolute pb-1",
        {
          "bg-neutral-700 text-white border-neutral-900": !isComparing && !isSorted && !isSwapping,
          "bg-red-300 text-red-700 border-red-700": isSwapping,
          "bg-tertiary-300 text-tertiary-700 border-tertiary-700": isComparing && !isWatching,
          "bg-primary-300 text-primary-700 border-primary-700": isWatching && !isSorted,
          "bg-green-300 text-green-700 border-green-700": isSorted && !isComparing && !isSwapping,
        }
      )}
      style={{
        left: TOTAL_WIDTH * order,
        height: value * 10,
      }}
    >
      {value}

      <Show when={isWatching && !isSorted && !isSwapping}>
        <div
          className="border border-violet-400 absolute -top-0.5 z-10"
          style={{ width: (listSize + 1) * TOTAL_WIDTH, left: -TOTAL_WIDTH * order }}
        ></div>
      </Show>
    </div>
  );
};
export default Bar;
