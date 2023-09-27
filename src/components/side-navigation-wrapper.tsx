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
        "fixed bottom-0 top-0 z-auto border-r-0 border-detail-dark bg-secondary-light",
        "lg:block lg:w-sidebar-small lg:border-r-4 xl:w-sidebar-large",
        {
          "invisible lg:visible": !isOpen,
          "fixed inset-x-0 bottom-0 top-14 bg-secondary-light": isOpen,
        },
      )}
    >
      {children}
    </div>
  );
}
