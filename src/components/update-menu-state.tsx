"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function UpdateMenuState({ setIsMenuOpen }) {
  const isMenuOpenSource = useSearchParams()?.get("open") == "true";

  useEffect(() => {
    setIsMenuOpen(isMenuOpenSource);
  }, [isMenuOpenSource]);
  return <></>;
}
