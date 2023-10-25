"use client";

import clsx from "clsx";
import { useContext } from "react";
import { openContext } from "../lib/Context";
import { useSearchParams } from "next/navigation";

export default function SideNavigationigationWrapper({ children }) {
  const isMenuOpen = useSearchParams()?.get("open") == "true";

  const [isOpen, setIsOpen] = useContext(openContext);
  return (
    <div
      id="side-navigation"
      className={clsx(
        //by default isOpen is false
        "border-detail-dark fixed bottom-0 top-14 z-auto border-r-0 bg-primary-50",
        "lg:block lg:w-sidebar-small xl:w-sidebar-large",
        {
          "invisible lg:visible": !isMenuOpen,
          "fixed inset-x-0 bottom-0 top-14 bg-primary-50": isMenuOpen,
        },
      )}
    >
      {children}
    </div>
  );
}
