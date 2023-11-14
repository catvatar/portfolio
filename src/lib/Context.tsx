"use client";

// import { useSearchParams } from "next/navigation";
import { createContext, useState } from "react";

export const tagsContext = createContext<any>(null);

function getUniqueTags(posts) {
  if (!posts) {
    return [];
  }
  return posts.reduce((acc, item) => {
    if (!item.tags) {
      console.log("error in ", item.id);
      return acc;
    }
    return [...acc, ...item.tags.filter((tag) => !acc.includes(tag))];
  }, []);
}

export function TagsContextProvider({ children, allPostsData }) {
  // const uniqueTags = getUniqueTags(allPostsData);

  const tagsStateObject = (() => {
    // const intermediateTags = useSearchParams()?.get("tags");
    // const clickedTagsFromSearchParams = intermediateTags
    //   ? intermediateTags
    //       .replace(/[\[\]]/g, "")
    //       .split(",")
    //       .filter((elem) => {
    //         return uniqueTags.includes(elem);
    //       })
    //   : [];
    const clickedTagsFromSearchParams = [];
    return useState<string[]>(clickedTagsFromSearchParams);
  })();

  return (
    <tagsContext.Provider value={tagsStateObject}>
      {children}
    </tagsContext.Provider>
  );
}
