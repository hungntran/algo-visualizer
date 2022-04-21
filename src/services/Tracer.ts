export enum TraceState {
  COMPARE = "COMPARE",
  SWAP = "SWAP",
  SORTED = "SORTED",
  INSERT = "INSERT",
  WATCH = "WATCH",
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

  public clear() {
    this.traces = [];
    this.reset();
  }

  public get resolvedSpeed() {
    return STEP_TIME_MS / traceSpeedMapped[this.speed];
  }

  public start({
    onCompare,
    onSwap,
    onFinish,
    onInsert,
    onSorted,
    onWatch,
  }: {
    onCompare: (payload: number[]) => void;
    onSwap: (payload: number[]) => void;
    onInsert: (payload: number[]) => void;
    onSorted: (payload: number[]) => void;
    onWatch: (payload: number[]) => void;
    onFinish: () => void;
  }) {
    this.clearTimeouts();
    const { resolvedSpeed } = this;
    const traces = this.traces.slice(this.current);

    traces.forEach((trace) => {
      const { type, payload } = trace;

      const timeout = window.setTimeout(() => {
        if (type === TraceState.COMPARE) {
          onCompare(payload);
        } else if (type === TraceState.SWAP) {
          onSwap(payload);
        } else if (type === TraceState.INSERT) {
          onInsert(payload);
        } else if (type === TraceState.WATCH) {
          onWatch(payload);
        } else if (type === TraceState.SORTED) {
          onSorted(payload);
        }
        this.current += 1;
        clearTimeout(timeout);
        this.timeoutIds.delete(timeout);
      }, this.timestamp++ * resolvedSpeed);

      this.timeoutIds.add(timeout);

      return;
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
