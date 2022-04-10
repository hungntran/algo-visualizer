import { useEffect, useState } from "react";
import Tracer from "services/Tracer";
import bubbleSort from "algorithms/sorting/bubbleSort";

type NumberProps = {
  value: number;
  order: number;
};

const useSortingVisualize = (sourceNumbers: number[]) => {
  const [tracer, setTracer] = useState<Tracer>();
  const [numbers, setNumbers] = useState<NumberProps[]>([]);

  useEffect(() => {
    setNumbers(
      sourceNumbers.map((num, index) => ({
        value: num,
        order: index,
      }))
    );
    setTracer(bubbleSort(sourceNumbers));
  }, [sourceNumbers]);

  const resetNumbers = () => {
    setNumbers(
      sourceNumbers.map((num, index) => ({
        value: num,
        order: index,
      }))
    );
  };

  return { tracer, setTracer, numbers, setNumbers, resetNumbers };
};

export default useSortingVisualize;
