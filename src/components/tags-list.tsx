"use client";

import clsx from "clsx";
import { useContext } from "react";
import { tagsContext } from "../lib/Context";
import TagElement from "./tag-element";
import { includedTagsFirst } from "../lib/tags";
import Break from "./break";
import { useSelectedLayoutSegments } from "next/navigation";

export default function TagsList({ tags }) {
  const show = useSelectedLayoutSegments().includes("posts");

  const [tagsState, setTagsState] = useContext(tagsContext);

  return (
    <div className={clsx({ hidden: show })}>
      <ul className="grid grid-cols-3 gap-1" id="tags-list">
        {includedTagsFirst(tags, tagsState).map((item, index) => {
          return <TagElement key={item} tag={item} parity={index % 2} />;
        })}
      </ul>
      <div className={clsx({ hidden: tagsState.length === 0 })}>
        <Break />
        <h2
          className="rounded bg-secondary-dark text-center hover:text-white"
          onClick={() => {
            setTagsState([]);
          }}
        >
          Clear Tags
        </h2>
      </div>
    </div>
  );
}
