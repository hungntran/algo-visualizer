import React, { FC, useState } from "react";
import useSortingVisualize from "hooks/useSortingVisualize";
import Bar from "components/Bar";
import VisualizerControls, { VisualizerStatus } from "components/VisualizerControls";
import SizeSelect from "components/SizeSelect";
import SpeedSelect from "components/SpeedSelect";
import Show from "components/common/Show";
import Legend from "components/Legend";
import { generateListUniqueNumber } from "utils/number";
import { TraceSpeed } from "services/Tracer";
import { SortingAlgorithms } from "pages/Sorting";
import useGlobal from "hooks/useGlobal";

type SortingVisualizerProps = {
  type: SortingAlgorithms | string;
};

const MIN_HEIGHT = 420;

const SortingVisualizer: FC<SortingVisualizerProps> = ({ type }) => {
  const { listSize } = useGlobal();
  const [sourceNumbers, setSourceNumbers] = useState<number[]>(generateListUniqueNumber(listSize));
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapping, setSwapping] = useState<number[]>([]);
  const [watching, setWatching] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [status, setStatus] = useState<VisualizerStatus>(VisualizerStatus.NONE);
  const { tracer, setNumbers, numbers, resetNumbers, swap } = useSortingVisualize(
    sourceNumbers,
    type
  );

  if (tracer == null) {
    return (
      <div className="flex items-center justify-center" style={{ height: MIN_HEIGHT + 68 }}>
        Loading...
      </div>
    ); // Placeholder for component
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
      onWatch: (payload) => {
        setWatching(payload);
      },
      onInsert: (payload) => {
        const source = numbers.find((num) => num.value === payload[0]);
        const target = numbers.find((num) => num.value === payload[1]);

        if (source == null || target == null) {
          return;
        }

        const currentOrder = source.order;
        source.order = target.order;
        target.order += 1;
        numbers.forEach((num) => {
          if (num.order > source.order && num.order < currentOrder && num !== target) {
            num.order += 1;
          }
        });

        setNumbers([...numbers]);
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
    setWatching([]);
    setStatus(VisualizerStatus.NONE);
  };

  const handleSelectSize = (size: number) => {
    handleReset();
    const randomNumbers = generateListUniqueNumber(size);
    setSourceNumbers(Array.from(randomNumbers));
  };

  const isRunning = status === VisualizerStatus.RUNNING;

  const handleSelectSpeed = (speed: TraceSpeed) => {
    tracer.setSpeed(speed);

    if (isRunning) {
      handleStart();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="w-full border bg-neutral-50 flex justify-center items-end rounded-md shadow-sm"
        style={{ height: MIN_HEIGHT }}
      >
        <Show when={!isRunning}>
          <SizeSelect onSelect={handleSelectSize} />
        </Show>
        <Legend />
        <SpeedSelect onSelect={handleSelectSpeed} />

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
              isWatching={watching.includes(value)}
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
