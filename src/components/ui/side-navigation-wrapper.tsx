"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";

export default function SideNavigationigationWrapper({ children }) {
  const isMenuOpen = useSearchParams()?.get("open") == "true";

  return (
    <div
      id="side-navigation"
      className={clsx(
        //by default isOpen is false,
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
