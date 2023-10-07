"use client";

import Link from "next/link";
import Image from "next/image";
import TagElement from "./tag-element";
import { useContext } from "react";
import { tagsContext } from "../lib/Context";
import { includedTagsFirst } from "../lib/tags";
import { useRouter } from "next/navigation";

export function BlogElement({ post }) {
  const [tagsState, setTagsState] = useContext(tagsContext);

  const router = useRouter();

  return (
    <div
      className="border-detail-500 group overflow-hidden rounded-tl-2xl border-8 border-b-0 border-r-0 md:h-80 xl:h-96"
      id="blog-element"
    >
      <div className="-mt-px flex overflow-hidden md:h-3/4">
        <Image
          src={post.img}
          alt={`${post.id}`}
          sizes="100vw"
          style={{
            width: "auto",
            height: "100%",
          }}
          width={16}
          height={9}
          className="border-detail-500 bg-detail-500 cursor-pointer rounded-br-2xl border-8 border-l-0 border-t-0 object-scale-down"
          onClick={() => {
            router.push(`posts/${post.type}/${post.id}`);
          }}
        />
        <div className="invisible border-0 pl-2 pt-2 md:visible">
          <ul className="grid grid-cols-3 content-start gap-2 overflow-hidden">
            {includedTagsFirst(post.tags ? post.tags : [], tagsState).map(
              (item, index) => {
                return <TagElement key={item} tag={item} parity={index % 2} />;
              },
            )}
          </ul>
        </div>
      </div>
      <div className="p-1">
        <Link href={`posts/${post.type}/${post.id}`}>
          <p>{post.title}</p>
          <p>{post.date}</p>
        </Link>
      </div>
    </div>
  );
}
