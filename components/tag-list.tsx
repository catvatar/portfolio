import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { tagsContext, postsContext } from "../lib/Context";

//needs:
//post tags, 
export default function TagList(){
  const uniqueTags = (()=>{
    const postData:any = useContext(postsContext);
    return postData?postData.reduce(
      (acc, tags) => {
        return [...acc, ...tags.tags.filter(
          (tag) => {
            return !acc.includes(tag);
          }
        )];
      },
      []
      ):[];
  })();

  const [clickedTags, setClickedTags] = (() => {
    const iTags = useSearchParams()?.get('tags');
    const startArr =  iTags?iTags
      .replace(/[\[\]]/g,'')
      .split(',')
      .filter((elem)=>{
        return uniqueTags.includes(elem);
      }):[];
    return useState<string[]>(startArr);
  })();

  const [tagsState, setTagsState] = useContext(tagsContext);
  useEffect(()=>{setTagsState(clickedTags)},[]);

  return (
    <ul className='grid grid-cols-4 lg:grid-cols-3 gap-1'>
      {uniqueTags.map(
        (item)=>{
          return (
            <li className={clsx('col-auto text-black hover:text-white',{'text-debug':clickedTags.includes(item)})} 
              key={item} 
              onClick={()=>{
                const newArr = clickedTags.includes(item)?clickedTags.filter((elem)=>elem!==item):[...clickedTags, item];
                setClickedTags(newArr);
                setTagsState(newArr);
              }}>{item}
            </li>
          )
        }
      )}
    </ul>
  );
}