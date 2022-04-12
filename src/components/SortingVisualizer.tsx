import React, { FC, useState } from "react";
import useSortingVisualize from "hooks/useSortingVisualize";
import Bar from "components/Bar";
import VisualizerControls, { VisualizerStatus } from "components/VisualizerControls";
import AlgorithmDetail from "components/AlgorithmDetail";
import SizeSelect from "components/SizeSelect";
import SpeedSelect from "components/SpeedSelect";
import Show from "components/common/Show";
import { generateListUniqueNumber } from "utils/number";

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
};

const MIN_HEIGHT = 400;
const MAX_WIDTH = 1000;

const defaultList = generateListUniqueNumber(10);

const SortingVisualizer: FC<SortingVisualizerProps> = () => {
  const [sourceNumbers, setSourceNumbers] = useState<number[]>(defaultList);
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapping, setSwapping] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [status, setStatus] = useState<VisualizerStatus>(VisualizerStatus.NONE);
  const { tracer, setNumbers, numbers, resetNumbers, swap } = useSortingVisualize(sourceNumbers);

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
        swap(numA, numB);
        resetActions();
        setSwapping(payload);
        setNumbers([...numbers]);
      },
      onSorted: (payload) => {
        resetActions();
        setSorted((sorted) => sorted.concat(payload));
      },
      onFinish: () => {
        setStatus(VisualizerStatus.NONE);
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

  const handleSelectSize = (size: number) => {
    handleReset();
    const randomNumbers = generateListUniqueNumber(size);
    setSourceNumbers(Array.from(randomNumbers));
  };

  const isRunning = status === VisualizerStatus.RUNNING;

  return (
    <div className="relative px-4 mx-auto" style={{ maxWidth: MAX_WIDTH }}>
      <div
        className="w-full bg-white border-2 border-primary-500 flex justify-center items-end rounded-md"
        style={{ height: MIN_HEIGHT }}
      >
        <Show when={!isRunning}>
          <SizeSelect onSelect={handleSelectSize} />
          <SpeedSelect />
        </Show>

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

      <AlgorithmDetail />
    </div>
  );
};

export default SortingVisualizer;
