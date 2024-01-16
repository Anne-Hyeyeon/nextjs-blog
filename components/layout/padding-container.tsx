import React, { ReactNode } from "react";

const PaddingContainer = ({ children }: { children: ReactNode }) => {
  return <div className="px-8">{children}</div>;
};

export default PaddingContainer;
