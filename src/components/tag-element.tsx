import clsx from "clsx";
import { tagsContext } from "../lib/Context";
import { useContext } from "react";

export default function TagElement({ tag }){
  const [tagsState,setTagsState] = useContext(tagsContext);

  return (
    <li className={clsx('col-auto text-black hover:text-white',{'text-debug':tagsState.includes(tag)})} 
      onClick={()=>{
        const newArr = tagsState.includes(tag)?tagsState.filter((elem)=>elem!==tag):[...tagsState, tag];
        setTagsState(newArr);
      }}>{tag}
    </li>
  );
};