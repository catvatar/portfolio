"use client";

import clsx from "clsx";
import TagElement from "./tag-element";
import { useSelectedLayoutSegments } from "next/navigation";

export default function PostsTags({ posts }) {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const show = selectedLayoutSegments.includes("posts");
  if (!show) return null;
  const tags =
    posts.find(
      (elem) =>
        elem.id === selectedLayoutSegments[selectedLayoutSegments.length - 1],
    ).tags || [];

  return (
    <ul className="grid grid-cols-3 gap-1" id="tags-list">
      {tags.map((item, index) => {
        return <TagElement key={item} tag={item} parity={index % 2} />;
      })}
    </ul>
  );
}
