export enum TraceState {
  COMPARE = "COMPARE",
  SWAP = "SWAP",
  SORTED = "SORTED",
}

type TraceType = {
  type: TraceState;
  payload: number[];
};

const STEP_TIME_MS = 500;

class Tracer {
  private traces: TraceType[] = [];
  private current: number = 0;
  private timeoutIds = new Set<NodeJS.Timeout>();
  private timestamp: number = 0;

  public reset() {
    this.timestamp = 0;
    this.traces = [];
    this.current = 0;
    this.timeoutIds.clear();
  }

  public add(trace: TraceType) {
    this.traces.push(trace);
  }

  public start(
    index: number,
    {
      onCompare,
      onCompared,
      onSwap,
      onSorted,
    }: {
      onCompare: (payload: number[]) => void;
      onCompared: () => void;
      onSwap: (payload: number[]) => void;
      onSorted: (payload: number[]) => void;
    }
  ) {
    const traces = this.traces.slice(index);
    traces.forEach((trace) => {
      const { type, payload } = trace;

      if (type === TraceState.COMPARE) {
        const compareTimeout = setTimeout(() => {
          onCompare(payload);
          clearTimeout(compareTimeout);
          this.timeoutIds.delete(compareTimeout);
        }, this.timestamp++ * STEP_TIME_MS);
        this.timeoutIds.add(compareTimeout);

        const comparedTimeout = setTimeout(() => {
          onCompared();
          clearTimeout(comparedTimeout);
          this.timeoutIds.delete(comparedTimeout);
        }, this.timestamp++ * STEP_TIME_MS);
        this.timeoutIds.add(comparedTimeout);

        return;
      }

      if (type === TraceState.SWAP) {
        const swapTimeout = setTimeout(() => {
          onSwap(payload);
          clearTimeout(swapTimeout);
          this.timeoutIds.delete(swapTimeout);
        }, this.timestamp++ * STEP_TIME_MS);
        this.timeoutIds.add(swapTimeout);

        return;
      }

      if (type === TraceState.SORTED) {
        const sortedTimeout = setTimeout(() => {
          onSorted(payload);
          clearTimeout(sortedTimeout);
          this.timeoutIds.delete(sortedTimeout);
        }, this.timestamp++ * STEP_TIME_MS);
        this.timeoutIds.add(sortedTimeout);

        return;
      }
    });
  }

  public pause() {
    this.timeoutIds.forEach((timeout) => {
      clearTimeout(timeout);
    });
    this.timeoutIds.clear();
  }
}

export default Tracer;
