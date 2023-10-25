"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function MenuButton() {
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
      <div className="rounded border-0 bg-primary-200 p-1 text-center hover:bg-secondary-200">
        Menu
      </div>
    </Link>
  );
}
