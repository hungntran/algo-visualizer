import React, { FC } from "react";

const MAX_WIDTH = 1000;

const Container: FC = ({ children }) => {
  return (
    <div className="mx-auto px-4" style={{ maxWidth: MAX_WIDTH }}>
      {children}
    </div>
  );
};

export default Container;
