"use client";

import Link from "next/link";
import Image from "next/image";
import TagElement from "./tag-element";
import { useContext } from "react";
import { tagsContext } from "../lib/Context";
import { includedTagsFirst } from "../lib/tags";
import { useRouter } from "next/navigation";

export function BlogElement({ id, title, tags, img, date, subfolder }) {
  const [tagsState, setTagsState] = useContext(tagsContext);

  const router = useRouter();

  return (
    <>
      <section className="group border-4 border-b-0 border-r-0 border-detail-dark md:h-80 xl:h-96">
        <div className="flex border-0 border-b-4 border-detail-dark md:h-3/4">
          <Image
            src={img}
            alt={`${id}`}
            sizes="100vw"
            style={{
              width: "auto",
              height: "100%",
            }}
            width={16}
            height={9}
            className="border-0 border-r-4 border-detail-dark object-scale-down"
            onClick={() => {
              router.push(`${subfolder === "blog" ? "blog/" : ""}posts/${id}`);
            }}
          />
          <div className="invisible border-0 pl-2 pt-2 md:visible">
            <ul className="grid grid-cols-3 content-start gap-2 overflow-hidden">
              {includedTagsFirst(tags, tagsState).map((item, index) => {
                return <TagElement key={item} tag={item} parity={index % 2} />;
              })}
            </ul>
          </div>
        </div>
        <div className="p-1">
          <Link href={`posts/${id}`}>
            <p>{title}</p>
            <p>{date}</p>
          </Link>
        </div>
      </section>
    </>
  );
}
