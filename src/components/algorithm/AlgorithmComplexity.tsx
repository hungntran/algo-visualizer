import React, { FC } from "react";
import Box from "components/common/Box";
import Badge from "components/common/Badge";
import ComplexityBadge from "./ComplexityBadge";
import { Complexity } from "services/Api";
import classNames from "classnames";

const AlgorithmComplexity: FC<{
  worstCase: Complexity;
  averageCase: Complexity;
  bestCase: Complexity;
  space: Complexity;
  isStable: boolean;
}> = ({ worstCase, averageCase, bestCase, space, isStable }) => {
  return (
    <div className="flex flex-col gap-y-4 mb-4">
      <Box title="Time complexity">
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <div>Best-case</div>
            <ComplexityBadge complexity={bestCase} />
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold">Average</div>
            <ComplexityBadge complexity={averageCase} />
          </div>
          <div className="flex justify-between items-center">
            <div>Worst-case</div>
            <ComplexityBadge complexity={worstCase} />
          </div>
        </div>
      </Box>
      <Box title="Space complexity">
        <ComplexityBadge complexity={space} />
      </Box>
      <Box title="Stable">
        <Badge
          text={isStable ? "Yes" : "No"}
          className={classNames(
            isStable ? "bg-green-50  text-green-600" : "bg-red-50 text-red-600"
          )}
        />
      </Box>
    </div>
  );
};

export default AlgorithmComplexity;
