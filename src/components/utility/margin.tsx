import React from "react";

/**
 * A component that adds margin to its children.
 * @param children - The children components to apply margin to.
 * @param m - The magnitude of the margin to apply.
 * @returns A div element with the specified margin applied to its children.
 */

export default function Margin({ children, m }) {
  return <div className={`p-${m}`}>{children}</div>;
}
