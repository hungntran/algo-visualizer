import React, { FC, useEffect, useState } from "react";
import Bar from "components/Bar";
import useSortingVisualize from "hooks/useSortingVisualize";

export enum SortingAlgorithms {
  BUBBLE_SORT = "BUBBLE_SORT",
}

export enum SortingState {
  COMPARE = "COMPARE",
  SWAP = "SWAP",
  SORTED = "SORTED",
}

export type SortingTrace = {
  type: SortingState;
  payload: number[];
};

type SortingVisualizerProps = {
  type?: SortingAlgorithms;
  sourceNumbers: number[];
};

const MIN_HEIGHT = 400;
const MAX_WIDTH = 800;

const SortingVisualizer: FC<SortingVisualizerProps> = ({ sourceNumbers }) => {
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const { tracer, setNumbers, numbers } = useSortingVisualize(sourceNumbers);

  console.log("render");

  if (tracer == null) {
    return null;
  }

  const handleStart = () => {
    tracer.start(0, {
      onCompare: (payload) => {
        setComparing(payload);
      },
      onCompared: () => {
        setComparing([]);
      },
      onSwap: (payload) => {
        const [numA, numB] = payload;
        const res = [...numbers];
        const a = res.find((num) => num.value === numA);
        const b = res.find((num) => num.value === numB);
        if (a && b) {
          let tmp = a.order;
          a.order = b.order;
          b.order = tmp;
        }
        setNumbers(res);
      },
      onSorted: (payload) => {
        setSorted((sorted) => sorted.concat(payload));
      },
    });
  };

  const handlePause = () => {
    tracer.pause();
  };

  return (
    <div className="p-4">
      <div
        className="relative mx-auto bg-purple-100 border-2 border-purple-600 flex justify-center items-end rounded-md"
        style={{ height: MIN_HEIGHT, width: MAX_WIDTH }}
      >
        {numbers.map(({ value, order }) => (
          <Bar
            key={value}
            order={order}
            value={value}
            isComparing={comparing.includes(value)}
            isSorted={sorted.includes(value)}
          />
        ))}
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default SortingVisualizer;
