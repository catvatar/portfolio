"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function BackElement({ children }) {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const isBlog = selectedLayoutSegments.includes("blog");
  const onPost = selectedLayoutSegments.includes("posts");

  return (
    <div className={clsx({ hidden: !onPost })} id="back-element">
      <Link href={isBlog ? "/blog" : "/"}>{children}</Link>
    </div>
  );
}
