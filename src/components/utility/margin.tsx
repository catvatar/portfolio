import React from "react";

/**
 * A component that adds margin to its children.
 * @param children - The children components to apply margin to.
 * @param magnitude - The magnitude of the margin to apply.
 * @returns A div element with the specified margin applied to its children.
 */

export default function Margin({ children, magnitude }) {
  // p-1 p-2 p-4 p-8 p-16 p-32 p-64 p-128 p-256 p-512
  return <div className={`p-${magnitude}`}>{children}</div>;
}
