import React, { FC, useState } from "react";
import useSortingVisualize from "hooks/useSortingVisualize";
import Button from "components/Button";
import Bar from "components/Bar";

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

enum Status {
  NONE,
  RUNNING,
  PAUSED,
  DONE,
}

const SortingVisualizer: FC<SortingVisualizerProps> = ({ sourceNumbers }) => {
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [status, setStatus] = useState<Status>(Status.NONE);
  const { tracer, setNumbers, numbers, resetNumbers } =
    useSortingVisualize(sourceNumbers);

  console.log("render");

  if (tracer == null) {
    return null;
  }

  const handleStart = () => {
    setStatus(Status.RUNNING);

    tracer.start({
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
      onFinish: () => {
        console.log("finished");
        setStatus(Status.DONE);
      },
    });
  };

  const handlePause = () => {
    tracer.pause();
    setStatus(Status.PAUSED);
  };

  const handleReset = () => {
    tracer.reset();
    resetNumbers();
    setComparing([]);
    setSorted([]);
    setStatus(Status.NONE);
  };

  return (
    <div className="p-4">
      <div
        className="mx-auto bg-purple-100 border-2 border-purple-600 flex justify-center items-end rounded-md"
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
              isComparing={comparing.includes(value)}
              isSorted={sorted.includes(value)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-x-2 mt-4">
        {status === Status.RUNNING ? (
          <Button onClick={handlePause} text="Pause" />
        ) : (
          <>
            <Button onClick={handleStart} text="Start" />
            <Button onClick={handleReset} text="Reset" isOutline />
          </>
        )}
      </div>
    </div>
  );
};

export default SortingVisualizer;
