import React, { FC } from "react";
import Box from "components/common/Box";

export enum TimeComplexity {
  O_1,
  O_N,
  O_N2,
  O_LOGN,
  O_N_LOGN,
}

const timeComplexityDisplay = {
  [TimeComplexity.O_1]: "O(1)",
  [TimeComplexity.O_N]: "O(n)",
  [TimeComplexity.O_N2]: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  [TimeComplexity.O_LOGN]: "O(logn)",
  [TimeComplexity.O_N_LOGN]: "O(nlogn)",
};

const AlgorithmComplexity: FC<{
  worstCase: TimeComplexity;
  averageCase: TimeComplexity;
  bestCase: TimeComplexity;
  space: TimeComplexity;
  isStable: boolean;
}> = ({ worstCase, averageCase, bestCase, space, isStable }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Box title="Time complexity">
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between">
            <div>Best-case</div>
            <div>{timeComplexityDisplay[bestCase]}</div>
          </div>
          <div className="flex justify-between font-bold">
            <div>Average</div>
            <div>{timeComplexityDisplay[averageCase]}</div>
          </div>
          <div className="flex justify-between pb-2">
            <div>Worst-case</div>
            <div>{timeComplexityDisplay[worstCase]}</div>
          </div>
        </div>
      </Box>
      <Box title="Space complexity">
        <div>{timeComplexityDisplay[space]}</div>
      </Box>
      <Box title="Stability">
        <div>{isStable ? "Yes" : "No"}</div>
      </Box>
    </div>
  );
};

export default AlgorithmComplexity;
