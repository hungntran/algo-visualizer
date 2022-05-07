import classNames from "classnames";
import React, { FC } from "react";
import Show from "./Show";

const Box: FC<{ title?: string; className?: string }> = ({ children, title, className }) => {
  return (
    <div
      className={classNames(
        "p-4 border dark:hover:border-secondary-400 dark:border-gray-500 hover:border-secondary-400 transition-colors shadow-sm rounded-md",
        className
      )}
    >
      <Show when={title != null}>
        <div className="text-lg font-semibold mb-3">{title}</div>
      </Show>
      {children}
    </div>
  );
};

export default Box;
