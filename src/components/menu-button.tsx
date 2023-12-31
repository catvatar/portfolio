"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function MenuButton({ children }) {
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
    >
      {children}
    </Link>
  );
}
