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

  public add(trace: TraceType) {
    this.traces.push(trace);
  }

  public start({
    onCompare,
    onSwap,
    onFinish,
    onSorted,
  }: {
    onCompare: (payload: number[]) => void;
    onSwap: (payload: number[]) => void;
    onSorted: (payload: number[]) => void;
    onFinish: () => void;
  }) {
    const traces = this.traces.slice(this.current);

    traces.forEach((trace) => {
      const { type, payload } = trace;

      if (type === TraceState.COMPARE) {
        const compareTimeout = setTimeout(() => {
          onCompare(payload);
          this.current += 1;
          clearTimeout(compareTimeout);
          this.timeoutIds.delete(compareTimeout);
        }, this.timestamp++ * STEP_TIME_MS);

        this.timeoutIds.add(compareTimeout);

        return;
      }

      if (type === TraceState.SWAP) {
        const swapTimeout = setTimeout(() => {
          onSwap(payload);
          this.current += 1;
          clearTimeout(swapTimeout);
          this.timeoutIds.delete(swapTimeout);
        }, this.timestamp++ * STEP_TIME_MS);
        this.timeoutIds.add(swapTimeout);

        return;
      }

      if (type === TraceState.SORTED) {
        const sortedTimeout = setTimeout(() => {
          onSorted(payload);
          this.current += 1;
          clearTimeout(sortedTimeout);
          this.timeoutIds.delete(sortedTimeout);
        }, this.timestamp++ * STEP_TIME_MS);
        this.timeoutIds.add(sortedTimeout);

        return;
      }
    });

    setTimeout(() => {
      onFinish();
    }, this.timestamp++ * STEP_TIME_MS);
  }

  public pause() {
    this.clearTimeout();
    this.timestamp = 0;
  }

  public reset() {
    this.clearTimeout();
    this.timestamp = 0;
    this.current = 0;
  }

  public clearTimeout() {
    this.timeoutIds.forEach((timeout) => {
      clearTimeout(timeout);
    });
    this.timeoutIds.clear();
  }
}

export default Tracer;
