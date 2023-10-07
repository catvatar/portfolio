"use client";

import clsx from "clsx";
import { useContext } from "react";
import { openContext } from "../lib/Context";

export default function SideNavigationigationWrapper({ children }) {
  const [isOpen, setIsOpen] = useContext(openContext);
  return (
    <div
      id="side-navigation"
      className={clsx(
        //by default isOpen is false
        "border-detail-dark fixed bottom-0 top-14 z-auto border-r-0 bg-secondary-500",
        "lg:block lg:w-sidebar-small xl:w-sidebar-large",
        {
          "invisible lg:visible": !isOpen,
          "fixed inset-x-0 bottom-0 top-14 bg-secondary-500": isOpen,
        },
      )}
    >
      {children}
    </div>
  );
}
