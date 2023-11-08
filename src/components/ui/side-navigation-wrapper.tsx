"use client";

import clsx from "clsx";
import { useContext } from "react";
import { isMenuOpenContext } from "../../lib/Context";

export default function SideNavigationigationWrapper({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useContext(isMenuOpenContext);
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
