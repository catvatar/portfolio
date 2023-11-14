"use client";

import clsx from "clsx";
import { Suspense, useState } from "react";
import { UpdateMenuState } from "../update-menu-state";

export default function SideNavigationigationWrapper({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Suspense>
        <UpdateMenuState setIsMenuOpen={setIsMenuOpen} />
      </Suspense>
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
    </>
  );
}
