import Tracer, { TraceState } from "services/Tracer";

const insertionSort = (numbers: number[]): Tracer => {
  const tracer = new Tracer();
  const length = numbers.length;

  tracer.add({
    type: TraceState.SORTED,
    payload: [numbers[0]],
  });

  for (let i = 1; i < length; i++) {
    const num = numbers[i];
    let j = i - 1;

    while (j >= 0) {
      tracer.add({
        type: TraceState.COMPARE,
        payload: [num, numbers[j]],
      });

      if (num > numbers[j]) {
        break;
      }

      [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];

      tracer.add({
        type: TraceState.SWAP,
        payload: [numbers[j + 1], numbers[j]],
      });

      j -= 1;
    }

    numbers[j + 1] = num;

    tracer.add({
      type: TraceState.SORTED,
      payload: [numbers[j + 1]],
    });
  }

  return tracer;
};

export default insertionSort;
