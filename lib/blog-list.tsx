'use client'

import { BlogElement } from "./blog-element";
import { tagsContext } from "../public/Context";
import { useContext } from "react";

export default function BlogList({ param }){
  const [tagsState, setTagsState] = useContext(tagsContext);

  return (param.map(({ id, tags, title }) => {
    if(tagsState.reduce(
      (acc, item:string)=>{
        return acc&&tags.includes(item);
      }
    ,true)){
      return (<li key={id}>
        <BlogElement postPath={`/posts/${id}`} postTags={tags} postTitle={title} />
        <br />
      </li>);
    }else{
      return null;
    }
  }));
}