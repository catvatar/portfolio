"use client";

import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { isMenuOpenContext } from "../lib/Context";

export function UpdateMenuState() {
  const isMenuOpenSource = useSearchParams()?.get("open") == "true";
  const [isMenuOpen, setIsMenuOpen] = useContext(isMenuOpenContext);
  setIsMenuOpen(isMenuOpenSource);
  return <></>;
}
