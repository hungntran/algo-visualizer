import classNames from "classnames";
import React, { FC } from "react";
import Show from "./Show";

const Box: FC<{ title?: string; className?: string }> = ({ children, title, className }) => {
  return (
    <div className={classNames("p-4 border shadow-sm rounded-md", className)}>
      <Show when={title != null}>
        <div className="text-xl font-semibold mb-3">{title}</div>
      </Show>
      {children}
    </div>
  );
};

export default Box;
