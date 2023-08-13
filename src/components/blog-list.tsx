'use client'

import { BlogElement } from "./blog-element";
import { postsContext, tagsContext } from "../lib/Context";
import { useContext } from "react";

export default function BlogList(){
  const [tagsState, setTagsState] = useContext(tagsContext);
  const posts = useContext(postsContext);

  if(!posts || !tagsState){
    return(<></>);
  }

  const filteredPosts = posts.filter(item => tagsState.every(val => item.tags.includes(val)));

  if(filteredPosts.length === 0){
    return <h2>To Many Tags!</h2>;
  }

  return filteredPosts.map((post) => {
    return (<li key={post.id}>
      <BlogElement {...post} />
      <br />
    </li>);
  });
  
}