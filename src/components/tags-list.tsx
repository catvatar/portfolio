'use client'

import clsx from "clsx";
import { useContext } from "react";
import { tagsContext } from "../lib/Context";
import TagElement from "./tag-element";
import { includedTagsFirst } from "../lib/tags";
import Break from "./break";
import { useSelectedLayoutSegments } from "next/navigation";

export default function TagsList({ portfolioTags, blogTags }){
  const tags = useSelectedLayoutSegments().includes('blog')?blogTags:portfolioTags;
  const show = useSelectedLayoutSegments().includes('posts');

  const [tagsState, setTagsState] = useContext(tagsContext);

  return (
    <div className={clsx({'hidden':show})}>
      <ul className='grid grid-cols-4 lg:grid-cols-3 gap-1'>
        {includedTagsFirst( tags, tagsState ).map(
          (item)=>{
            return (
              <TagElement key={item} tag={item} />
            )
          }
        )}
      </ul>
      <div className={clsx({'hidden':tagsState.length===0})}>
      <Break />
      <h2 className='hover:text-white' onClick={()=>{setTagsState([]);}}>Clear Tags</h2>
      </div>
    </div>
  );
}