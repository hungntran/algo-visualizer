import Tracer, { TraceState } from "services/Tracer";

const bubbleSort = (arr: number[]): Tracer => {
  const tracer = new Tracer();
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      tracer.add({
        type: TraceState.COMPARE,
        payload: [arr[j], arr[j + 1]],
      });

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        tracer.add({
          type: TraceState.SWAP,
          payload: [arr[j], arr[j + 1]],
        });
      }
    }

    tracer.add({
      type: TraceState.SORTED,
      payload: [arr[length - i - 1]],
    });
  }

  return tracer;
};

export default bubbleSort;
