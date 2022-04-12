import React, { FC } from "react";

const Show: FC<{ when: boolean }> = ({ when, children }) => {
  if (!when) {
    return null;
  }
  return <>{children}</>;
};

export default Show;
