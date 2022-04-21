import { useEffect, useState } from "react";
import Tracer from "services/Tracer";
import bubbleSort from "algorithms/sorting/bubbleSort";
import { SortingAlgorithms } from "pages/Sorting";
import selectionSort from "algorithms/sorting/selectionSort";
import insertionSort from "algorithms/sorting/insertionSort";
import traceMergeSort from "algorithms/sorting/mergeSort";
import useGlobal from "./useGlobal";

type NumberProps = {
  value: number;
  order: number;
};

const algoMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: bubbleSort,
  [SortingAlgorithms.SELECTION_SORT]: selectionSort,
  [SortingAlgorithms.INSERTION_SORT]: insertionSort,
  [SortingAlgorithms.MERGE_SORT]: traceMergeSort,
  [SortingAlgorithms.QUICK_SORT]: traceMergeSort,
};

const useSortingVisualize = (sourceNumbers: number[], type: SortingAlgorithms) => {
  const { speed } = useGlobal();
  const [tracer, setTracer] = useState<Tracer>();
  const [numbers, setNumbers] = useState<NumberProps[]>([]);

  useEffect(() => {
    setNumbers(
      sourceNumbers.map((num, index) => ({
        value: num,
        order: index,
      }))
    );

    const tracer = algoMapped[type]([...sourceNumbers]);
    setTracer(tracer);
    tracer.setSpeed(speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceNumbers, type]);

  const resetNumbers = () => {
    setNumbers(
      sourceNumbers.map((num, index) => ({
        value: num,
        order: index,
      }))
    );
  };

  const swap = (a: number, b: number) => {
    const numA = numbers.find((num) => num.value === a);
    const numB = numbers.find((num) => num.value === b);

    if (numA && numB) {
      let tmp = numA.order;
      numA.order = numB.order;
      numB.order = tmp;
    }
  };

  return { tracer, setTracer, numbers, setNumbers, swap, resetNumbers };
};

export default useSortingVisualize;
