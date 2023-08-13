import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { tagsContext, postsContext } from "../lib/Context";

function getUniqueTags( posts ){
  if(!posts){
    return [];
  }
  return posts.reduce(
    (acc, item) => {
      if(!item.tags){
        console.log('error in ',item.id);
        return acc;
      }
      return [...acc, ...item.tags.filter(tag => !acc.includes(tag))];},[]
  )
}

// I need a lot of error handling
export default function TagList(){

  const uniqueTags = getUniqueTags(useContext(postsContext));

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

  const SingleTag = ({ param }) => {
    return (
      <div className={clsx('col-auto text-black hover:text-white',{'text-debug':clickedTags.includes(param)})} 
        onClick={()=>{
          const newArr = clickedTags.includes(param)?clickedTags.filter((elem)=>elem!==param):[...clickedTags, param];
          setClickedTags(newArr);
          setTagsState(newArr);
        }}>{param}
      </div>
    );
  };

  return (
    <>
      <ul className='grid grid-cols-4 lg:grid-cols-3 gap-1'>
        {uniqueTags.map(
          (item)=>{
            return (<li key={item}>
              <SingleTag param={item}/>
            </li>)
          }
        )}
      </ul>
      <div className={clsx({'hidden':clickedTags.length===0})}>
      <hr className='border-black my-3' />
      <h2 className='hover:text-white' onClick={()=>{
        setClickedTags([]);
        setTagsState([]);
      }}>Clear Tags</h2>
      </div>
    </>
  );
}