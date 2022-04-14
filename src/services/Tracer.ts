export enum TraceState {
  COMPARE = "COMPARE",
  SWAP = "SWAP",
  SORTED = "SORTED",
}

export enum TraceSpeed {
  SLOW = "SLOW",
  NORMAL = "NORMAL",
  FAST = "FAST",
}

type TraceType = {
  type: TraceState;
  payload: number[];
};

const STEP_TIME_MS = 300;

export const traceSpeedMapped = {
  [TraceSpeed.SLOW]: 0.5,
  [TraceSpeed.NORMAL]: 1,
  [TraceSpeed.FAST]: 2,
};

class Tracer {
  private traces: TraceType[] = [];
  private speed: TraceSpeed = TraceSpeed.NORMAL;
  private current: number = 0;
  private timeoutIds = new Set<number>();
  private timestamp: number = 0;

  public add(trace: TraceType) {
    this.traces.push(trace);
  }

  public get resolvedSpeed() {
    return STEP_TIME_MS / traceSpeedMapped[this.speed];
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
    this.clearTimeouts();
    const { resolvedSpeed } = this;
    const traces = this.traces.slice(this.current);

    traces.forEach((trace) => {
      const { type, payload } = trace;

      if (type === TraceState.COMPARE) {
        const compareTimeout = window.setTimeout(() => {
          onCompare(payload);
          this.current += 1;
          clearTimeout(compareTimeout);
          this.timeoutIds.delete(compareTimeout);
        }, this.timestamp++ * resolvedSpeed);

        this.timeoutIds.add(compareTimeout);

        return;
      }

      if (type === TraceState.SWAP) {
        const swapTimeout = window.setTimeout(() => {
          onSwap(payload);
          this.current += 1;
          clearTimeout(swapTimeout);
          this.timeoutIds.delete(swapTimeout);
        }, this.timestamp++ * resolvedSpeed);
        this.timeoutIds.add(swapTimeout);

        return;
      }

      if (type === TraceState.SORTED) {
        const sortedTimeout = window.setTimeout(() => {
          onSorted(payload);
          this.current += 1;
          clearTimeout(sortedTimeout);
          this.timeoutIds.delete(sortedTimeout);
        }, this.timestamp++ * resolvedSpeed);
        this.timeoutIds.add(sortedTimeout);

        return;
      }
    });

    const finishedTimeout = window.setTimeout(() => {
      onFinish();
    }, this.timestamp++ * resolvedSpeed);
    this.timeoutIds.add(finishedTimeout);
  }

  public setSpeed(value: TraceSpeed) {
    this.speed = value;
    this.clearTimeouts();
  }

  public pause() {
    this.clearTimeouts();
  }

  public reset() {
    this.clearTimeouts();
    this.current = 0;
  }

  public clearTimeouts() {
    this.timeoutIds.forEach((timeout) => {
      clearTimeout(timeout);
    });
    this.timeoutIds.clear();
    this.timestamp = 0;
  }
}

export default Tracer;
