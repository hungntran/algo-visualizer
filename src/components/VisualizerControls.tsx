import React, { FC } from "react";
import Button from "components/Button";
import classNames from "classnames";

export enum VisualizerStatus {
  NONE,
  RUNNING,
  PAUSED,
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
  onRandomize,
}) => {
  const handleClickStart = () => {
    if (
      status === VisualizerStatus.NONE ||
      status === VisualizerStatus.PAUSED
    ) {
      onStart && onStart();
      return;
    }

    if (status === VisualizerStatus.RUNNING) {
      onPause && onPause();
      return;
    }
  };

  return (
    <div className={classNames("mt-4", className)}>
      <div className="flex justify-center gap-x-2 mb-4">
        <Button
          text={
            status === VisualizerStatus.RUNNING
              ? "Pause"
              : status === VisualizerStatus.PAUSED
              ? "Resume"
              : "Start"
          }
          onClick={handleClickStart}
        />
        {status !== VisualizerStatus.RUNNING && (
          <Button text="Reset" onClick={onReset} isOutline />
        )}
      </div>
    </div>
  );
};

export default VisualizerControls;
