import Tracer, { TraceState } from "services/Tracer";

const bubbleSort = (numbers: number[]): Tracer => {
  const tracer = new Tracer();
  const length = numbers.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      tracer.add({
        type: TraceState.COMPARE,
        payload: [numbers[j], numbers[j + 1]],
      });

      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;

        tracer.add({
          type: TraceState.SWAP,
          payload: [numbers[j], numbers[j + 1]],
        });
      }
    }

    tracer.add({
      type: TraceState.SORTED,
      payload: [numbers[length - i - 1]],
    });
  }

  return tracer;
};

export default bubbleSort;
