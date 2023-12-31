"use client";

import { BlogElement } from "./blog-element";
import { tagsContext } from "../lib/Context";
import { useContext } from "react";

export default function BlogsList({ posts }) {
  const [tagsState, setTagsState] = useContext(tagsContext);

  if (!posts || !tagsState) {
    return <></>;
  }

  if (posts.length === 0) {
    return <h2>Something went wrong!</h2>;
  }

  const filteredPosts = posts.filter((item) =>
    tagsState.every((val) => item.tags.includes(val)),
  );

  if (filteredPosts.length === 0) {
    return <h2>To Many Tags!</h2>;
  }

  return (
    <ul id="blogs-list">
      {filteredPosts.map((post) => {
        return (
          <li key={post.id}>
            <BlogElement {...post} />
            <br />
          </li>
        );
      })}
    </ul>
  );
}
