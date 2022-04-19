import Tracer, { TraceState } from "services/Tracer";

const tracer = new Tracer();

const merge = (arr1: number[], arr2: number[]): number[] => {
  const sorted: number[] = [];

  tracer.add({ type: TraceState.COMPARE, payload: [...arr1, ...arr2] });

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift() as number);
    } else {
      tracer.add({ type: TraceState.INSERT, payload: [arr2[0], arr1[0]] });
      sorted.push(arr2.shift() as number);
    }
  }

  return sorted.concat(arr1.concat(arr2));
};

const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length <= 1) {
    return numbers;
  }

  const mid = numbers.length / 2;
  const left = numbers.slice(0, mid);
  const right = numbers.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const traceMergeSort = (numbers: number[]): Tracer => {
  tracer.clear();

  const result = mergeSort(numbers);
  tracer.add({ type: TraceState.SORTED, payload: result });

  return tracer;
};

export default traceMergeSort;
