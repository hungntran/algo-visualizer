import React, { FC } from "react";

const Badge: FC<{ text: React.ReactNode }> = ({ text }) => {
  return <div className="inline-block px-2 py-1 rounded-md bg-gray-100 font-semibold">{text}</div>;
};

export default Badge;
