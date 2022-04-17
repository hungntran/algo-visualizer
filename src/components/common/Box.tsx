import classNames from "classnames";
import React, { FC } from "react";
import Show from "./Show";

const Box: FC<{ title?: string; className?: string }> = ({ children, title, className }) => {
  return (
    <div className={classNames("p-4 border-2 border-primary-600 rounded-md text-sm", className)}>
      <Show when={title != null}>
        <div className="text-xl font-bold text-primary-600 mb-3">{title}</div>
      </Show>
      {children}
    </div>
  );
};

export default Box;
