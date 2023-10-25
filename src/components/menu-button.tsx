"use client";
import { useContext } from "react";
import { openContext } from "../lib/Context";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function MenuButton() {
  // const [isOpen, setIsOpen] = useContext(openContext);
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  return (
    <Link
      type="button"
      id="menu"
      className="group lg:hidden"
      href={
        pathname +
        "?open=" +
        (searchParams.get("open") == "true" ? "false" : "true")
      }
      // onClick={() => setIsOpen(!isOpen)}
    >
      <div className="rounded border-0 bg-primary-200 p-1 text-center hover:bg-secondary-200">
        Menu
      </div>
    </Link>
  );
}
