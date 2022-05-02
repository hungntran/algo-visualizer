import React, { FC } from "react";

const MAX_WIDTH = 1080;

const Container: FC = ({ children }) => {
  return (
    <div className="mx-auto px-5" style={{ maxWidth: MAX_WIDTH }}>
      {children}
    </div>
  );
};

export default Container;
