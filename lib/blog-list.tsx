'use client'

import { BlogElement } from "./blog-element";
import { tagsContext } from "../public/Context";
import { useContext } from "react";

export default function BlogList({ posts }){
  const [tagsState, setTagsState] = useContext(tagsContext);

  const filteredList = posts.filter((item)=>{
    return tagsState.every((val)=>item.tags.includes(val));
  });

  if(filteredList.length === 0){
    return <h2>To Many Tags!</h2>;
  }else{
    return filteredList.map(({ id, tags, title }) => {
      return (<li key={id}>
        <BlogElement postPath={`/posts/${id}`} postTags={tags} postTitle={title} />
        <br />
      </li>);
    });
  }
}