import clsx from "clsx";
import { tagsContext } from "../lib/Context";
import { useContext } from "react";

export default function TagElement({ tag, parity }){
  const [tagsState,setTagsState] = useContext(tagsContext);

  return (
    <li className={clsx('col-auto rounded p-1 border-0 text-black text-center hover:text-white',
    {'text-debug':tagsState.includes(tag), 'bg-secondary-light':parity !== 0, 'bg-secondary-dark':parity == 0})} 
      onClick={()=>{
        const newArr = tagsState.includes(tag)?tagsState.filter((elem)=>elem!==tag):[...tagsState, tag];
        setTagsState(newArr);
      }}>
        {tag}
    </li>
  );
};