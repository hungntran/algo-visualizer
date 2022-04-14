import React, { FC } from "react";
import Button from "components/Button";
import classNames from "classnames";
import Show from "./common/Show";

export enum VisualizerStatus {
  NONE,
  RUNNING,
  PAUSED,
  DONE,
}

type VisualizerControlsProps = {
  status: VisualizerStatus;
  className?: string;
  onPause?: () => void;
  onStart?: () => void;
  onReset?: () => void;
  onRandomize?: (size?: number) => void;
};

const VisualizerControls: FC<VisualizerControlsProps> = ({
  status,
  className,
  onPause,
  onStart,
  onReset,
}) => {
  const handleClickStart = () => {
    if (status === VisualizerStatus.NONE || status === VisualizerStatus.PAUSED) {
      onStart && onStart();
      return;
    }

    if (status === VisualizerStatus.RUNNING) {
      onPause && onPause();
      return;
    }
  };

  const isDone = status === VisualizerStatus.DONE;
  const isRunning = status === VisualizerStatus.RUNNING;
  const isPaused = status === VisualizerStatus.PAUSED;

  return (
    <div className={classNames("mt-4", className)}>
      <div className="flex justify-center gap-x-2 mb-4">
        <Show when={!isDone}>
          <Button
            text={isRunning ? "Pause" : isPaused ? "Resume" : "Start"}
            onClick={handleClickStart}
          />
        </Show>
        <Show when={!isRunning}>
          <Button text="Reset" onClick={onReset} isOutline />
        </Show>
      </div>
    </div>
  );
};

export default VisualizerControls;
