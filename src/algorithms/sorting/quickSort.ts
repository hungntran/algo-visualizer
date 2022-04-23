import Tracer, { TraceState } from "services/Tracer";
import { swap } from "utils/number";

const partition = (array: number[], left: number, right: number, tracer: Tracer) => {
  const pivot = array[right];
  tracer.add({ type: TraceState.WATCH, payload: [pivot] });

  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    tracer.add({ type: TraceState.COMPARE, payload: [array[j], pivot] });

    if (array[j] < pivot) {
      i++;

      if (i < j) {
        swap(array, i, j);
        tracer.add({ type: TraceState.SWAP, payload: [array[i], array[j]] });
      }
    }
  }

  swap(array, i + 1, right);
  tracer.add({ type: TraceState.SWAP, payload: [array[i + 1], array[right]] });

  return i + 1;
};

const quickSort = (array: number[], left: number, right: number, tracer: Tracer) => {
  if (left === right) {
    tracer.add({ type: TraceState.SORTED, payload: [array[left]] });
    return;
  }

  if (left < right) {
    const mid = partition(array, left, right, tracer);
    tracer.add({ type: TraceState.SORTED, payload: [array[mid]] });

    quickSort(array, left, mid - 1, tracer);
    quickSort(array, mid + 1, right, tracer);
  }
};

const traceQuickSort = (array: number[]): Tracer => {
  const tracer = new Tracer();

  quickSort([...array], 0, array.length - 1, tracer);

  return tracer;
};

export default traceQuickSort;
