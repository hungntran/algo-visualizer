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

const ComplexityBadge: FC<{ complexity: Complexity }> = ({ complexity }) => {
  return (
    <span className="px-2 py-0.5 rounded-md text-sm border bg-gray-50 text-gray-600">
      {complexityDisplayMap[complexity]}
    </span>
  );
};

export default ComplexityBadge;
