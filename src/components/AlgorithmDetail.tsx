import React, { FC } from "react";

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

const AlgorithmDetail: FC<{
  worstCase: TimeComplexity;
  averageCase: TimeComplexity;
  bestCase: TimeComplexity;
  space: TimeComplexity;
  info: React.ReactNode;
  link: string;
  isStable: boolean;
}> = ({ worstCase, averageCase, bestCase, space, info, link, isStable }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-x-4">
      <div className="p-4 border-2 border-primary-600 rounded-md mb-4">
        <div>
          {info}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 ml-2"
          >
            Wikipedia
          </a>
        </div>
      </div>

      <div className="p-4 border-2 border-primary-600 rounded-md mb-4 shrink-0 min-w-64 flex flex-col gap-y-2">
        <div className="flex justify-between">
          <div>Worst-case</div>
          <div className="font-semibold">{timeComplexityDisplay[worstCase]}</div>
        </div>
        <div className="flex justify-between font-semibold">
          <div>Average</div>
          <div>{timeComplexityDisplay[averageCase]}</div>
        </div>
        <div className="flex justify-between">
          <div>Best-case</div>
          <div className="font-semibold">{timeComplexityDisplay[bestCase]}</div>
        </div>
        <div className="font-semibold flex justify-between">
          <div>Space complexity</div>
          <div>{timeComplexityDisplay[space]}</div>
        </div>
        <div className="font-semibold flex justify-between">
          <div>Stability</div>
          <div>{isStable ? "Yes" : "No"}</div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetail;
