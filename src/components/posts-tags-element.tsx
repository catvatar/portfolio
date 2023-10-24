"use client";

import clsx from "clsx";
import TagElement from "./tag-element";
import { useSelectedLayoutSegments } from "next/navigation";

export default function PostsTags({ posts }) {
  const show = !useSelectedLayoutSegments().includes("posts");
  const tags = posts.reduce((acc, item) => {}, []);

  return (
    <div className={clsx({ hidden: show })}>
      <ul className="grid grid-cols-3 gap-1" id="tags-list">
        {tags.map((item, index) => {
          return <TagElement key={item} tag={item} parity={index % 2} />;
        })}
      </ul>
    </div>
  );
}
