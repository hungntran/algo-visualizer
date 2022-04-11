import React, { FC, useState } from "react";
import useSortingVisualize from "hooks/useSortingVisualize";
import Bar from "components/Bar";
import VisualizerControls, { VisualizerStatus } from "./VisualizerControls";

export enum SortingAlgorithms {
  BUBBLE_SORT = "BUBBLE_SORT",
}

export enum SortingState {
  COMPARE = "COMPARE",
  SWAP = "SWAP",
  SORTED = "SORTED",
}

type SortingVisualizerProps = {
  type?: SortingAlgorithms;
  sourceNumbers: number[];
};

const MIN_HEIGHT = 400;
const MAX_WIDTH = 800;

const SortingVisualizer: FC<SortingVisualizerProps> = ({ sourceNumbers }) => {
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapping, setSwapping] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [status, setStatus] = useState<VisualizerStatus>(VisualizerStatus.NONE);
  const { tracer, setNumbers, numbers, resetNumbers } =
    useSortingVisualize(sourceNumbers);

  console.log("render");

  if (tracer == null) {
    return null;
  }

  const resetActions = () => {
    setComparing([]);
    setSwapping([]);
  };

  const handleStart = () => {
    setStatus(VisualizerStatus.RUNNING);

    tracer.start({
      onCompare: (payload) => {
        resetActions();
        setComparing(payload);
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
        resetActions();
        setSwapping(payload);
        setNumbers(res);
      },
      onSorted: (payload) => {
        resetActions();
        setSorted((sorted) => sorted.concat(payload));
      },
      onFinish: () => {
        setStatus(VisualizerStatus.DONE);
      },
    });
  };

  const handlePause = () => {
    tracer.pause();
    setStatus(VisualizerStatus.PAUSED);
  };

  const handleReset = () => {
    tracer.reset();
    resetNumbers();
    resetActions();
    setSorted([]);
    setStatus(VisualizerStatus.NONE);
  };

  return (
    <div className="p-4">
      <div
        className="mx-auto bg-white border-2 border-primary-600 flex justify-center items-end rounded-md"
        style={{ height: MIN_HEIGHT, width: MAX_WIDTH }}
      >
        <div
          className="relative self-stretch flex items-end"
          style={{
            width: numbers.length * 30,
          }}
        >
          {numbers.map(({ value, order }) => (
            <Bar
              key={value}
              order={order}
              value={value}
              isSwapping={swapping.includes(value)}
              isComparing={comparing.includes(value)}
              isSorted={sorted.includes(value)}
            />
          ))}
        </div>
      </div>

      <VisualizerControls
        status={status}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
};

export default SortingVisualizer;
