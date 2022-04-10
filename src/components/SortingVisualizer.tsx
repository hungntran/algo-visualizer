import React, { FC, useEffect, useRef, useState } from "react";
import Bar from "components/Bar";

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

type NumberProps = {
  value: number;
  order: number;
};

type SortingVisualizerProps = {
  type?: SortingAlgorithms;
  sourceNumbers: number[];
  trace: SortingTrace[];
};

const MIN_HEIGHT = 400;
const MAX_WIDTH = 800;
const STEP_TIME_MS = 500;

const SortingVisualizer: FC<SortingVisualizerProps> = ({
  trace,
  sourceNumbers,
}) => {
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [numbers, setNumbers] = useState<NumberProps[]>([]);
  const offsetTime = useRef(0);

  console.log("render");

  useEffect(() => {
    setNumbers(
      sourceNumbers.map((num, index) => ({
        value: num,
        order: index,
      }))
    );
  }, [sourceNumbers]);

  useEffect(() => {
    trace.forEach((step) => {
      const { type, payload } = step;

      if (type === SortingState.COMPARE) {
        setTimeout(() => {
          setComparing(payload);
        }, offsetTime.current++ * STEP_TIME_MS);

        setTimeout(() => {
          setComparing([]);
        }, offsetTime.current++ * STEP_TIME_MS);

        return;
      }

      if (type === SortingState.SWAP) {
        setTimeout(() => {
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
        }, offsetTime.current++ * STEP_TIME_MS);

        return;
      }

      if (type === SortingState.SORTED) {
        setTimeout(() => {
          setSorted((sorted) => sorted.concat(payload));
        }, offsetTime.current++ * STEP_TIME_MS);
        return;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trace]);

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
    </div>
  );
};

export default SortingVisualizer;
