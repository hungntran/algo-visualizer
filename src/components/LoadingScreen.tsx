import React from "react";
import Spinner from "components/common/Spinner";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner className="w-9 h-9" />
    </div>
  );
};

export default LoadingScreen;
