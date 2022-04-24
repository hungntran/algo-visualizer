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
        "w-6 border border-b-0 text-white text-sm text-center rounded-t-md transition-all absolute py-0.5",
        {
          "bg-slate-600 border-slate-900": !isComparing && !isSorted && !isSwapping,
          "bg-custom-400 border-custom-700": isSwapping,
          "bg-tertiary-400 border-tertiary-700": isComparing && !isWatching,
          "bg-violet-400 border-violet-700": isWatching && !isSorted,
          "bg-green-300 border-green-600": isSorted && !isComparing && !isSwapping,
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
