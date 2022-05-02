import React, { FC } from "react";
import Spinner from "components/common/Spinner";

const LoadingScreen: FC<{ minHeight?: number }> = ({ minHeight }) => {
  return (
    <div className="w-full h-full flex justify-center items-center" style={{ minHeight }}>
      <Spinner className="w-9 h-9" />
    </div>
  );
};

export default LoadingScreen;
