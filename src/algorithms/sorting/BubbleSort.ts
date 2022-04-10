import { SortingState, SortingTrace } from "components/SortingVisualizer";

export default function bubbleSort(arr: number[]): SortingTrace[] {
  const trace: SortingTrace[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      trace.push({ type: SortingState.COMPARE, payload: [arr[j], arr[j + 1]] });

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        trace.push({ type: SortingState.SWAP, payload: [arr[j], arr[j + 1]] });
      }
    }
    trace.push({
      type: SortingState.SORTED,
      payload: [arr[arr.length - i - 1]],
    });
  }

  return trace;
}
