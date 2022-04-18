import Tracer, { TraceState } from "services/Tracer";

const mergeSort = (numbers: number[]): Tracer => {
  const tracer = new Tracer();
  let length = numbers.length;

  for (let i = 0; i < length; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      tracer.add({
        type: TraceState.COMPARE,
        payload: [numbers[j], numbers[min]],
      });

      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let tmp = numbers[i];
      numbers[i] = numbers[min];
      numbers[min] = tmp;

      tracer.add({
        type: TraceState.SWAP,
        payload: [numbers[i], numbers[min]],
      });
    }

    tracer.add({
      type: TraceState.SORTED,
      payload: [numbers[i]],
    });
  }

  return tracer;
};

export default mergeSort;
