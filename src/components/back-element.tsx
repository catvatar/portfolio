"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function BackElement() {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const isBlog = selectedLayoutSegments.includes("blog");
  const onPost = selectedLayoutSegments.includes("posts");

  return (
    <div
      className={clsx("judtify-self-start", { hidden: !onPost })}
      id="back-element"
    >
      <Link href={isBlog ? "/blog" : "/"}>
        <div className="hover:text-gray-400">Back</div>
      </Link>
    </div>
  );
}
