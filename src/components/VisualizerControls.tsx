import React, { FC } from "react";
import Button from "components/Button";
import classNames from "classnames";

export enum VisualizerStatus {
  NONE,
  RUNNING,
  PAUSED,
  DONE,
}

const VisualizerControls: FC<{
  status: VisualizerStatus;
  className?: string;
  onPause?: () => void;
  onStart?: () => void;
  onReset?: () => void;
}> = ({ status, className, onPause, onStart, onReset }) => {
  return (
    <div className={classNames("flex justify-center gap-x-2 mt-4", className)}>
      {status === VisualizerStatus.RUNNING ? (
        <Button onClick={onPause} text="Pause" />
      ) : (
        <>
          <Button onClick={onStart} text="Start" />
          <Button onClick={onReset} text="Reset" isOutline />
        </>
      )}
    </div>
  );
};

export default VisualizerControls;
