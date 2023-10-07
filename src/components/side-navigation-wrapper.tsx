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
        "bg-primary-300 fixed bottom-0 top-0 z-auto border-r-0 border-detail-dark",
        "lg:block lg:w-sidebar-small xl:w-sidebar-large",
        {
          "invisible lg:visible": !isOpen,
          "bg-primary-300 fixed inset-x-0 bottom-0 top-14": isOpen,
        },
      )}
    >
      {children}
    </div>
  );
}
