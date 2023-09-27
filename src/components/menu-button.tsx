"use client";
import { useContext } from "react";
import { openContext } from "../lib/Context";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useContext(openContext);
  return (
    <button
      type="button"
      id="menu"
      className="group lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="group-hover:text-gray-400">Menu</div>
    </button>
  );
}
