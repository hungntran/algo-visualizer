import classNames from "classnames";
import React, { FC } from "react";

export enum Complexity {
  O_1,
  O_N,
  O_N2,
  O_LOGN,
  O_N_LOGN,
}

const complexityColorMap = {
  [Complexity.O_1]: "bg-emerald-50",
  [Complexity.O_LOGN]: "bg-green-50",
  [Complexity.O_N]: "bg-green-50",
  [Complexity.O_N_LOGN]: "bg-orange-50",
  [Complexity.O_N2]: "bg-rose-50",
};

const complexityDisplayMap = {
  [Complexity.O_1]: "O(1)",
  [Complexity.O_LOGN]: "O(logn)",
  [Complexity.O_N]: "O(n)",
  [Complexity.O_N_LOGN]: "O(n logn)",
  [Complexity.O_N2]: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
};

const ComplexityBadge: FC<{ complexity: Complexity }> = ({ complexity }) => {
  return (
    <span className={classNames("px-3 py-1 rounded-md text-sm", complexityColorMap[complexity])}>
      {complexityDisplayMap[complexity]}
    </span>
  );
};

export default ComplexityBadge;
