import classNames from "classnames";
import React, { FC } from "react";
import { Complexity } from "services/Api";

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

const complexityColorMap = {
  [Complexity.O_1]: "bg-green-50 text-green-600",
  [Complexity.O_LOGN]: "bg-green-50 text-green-600",
  [Complexity.O_N]: "bg-green-50 text-green-600",
  [Complexity.O_N_LOGN]: "bg-orange-50 text-orange-600",
  [Complexity.O_N2]: "bg-red-50 text-red-600",
};

const ComplexityBadge: FC<{ complexity: Complexity }> = ({ complexity }) => {
  return (
    <span className={classNames("px-2 py-0.5 rounded-md text-sm", complexityColorMap[complexity])}>
      {complexityDisplayMap[complexity]}
    </span>
  );
};

export default ComplexityBadge;
