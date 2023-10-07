import clsx from "clsx";
import { tagsContext } from "../lib/Context";
import { useContext } from "react";

export default function TagElement({ tag, parity }) {
  const [tagsState, setTagsState] = useContext(tagsContext);
  const tagIsClicked = tagsState.includes(tag);

  return (
    <li
      className={clsx(
        "col-auto rounded border-0 p-1 text-center hover:bg-secondary-300",
        {
          "bg-secondary-500": parity !== 0 && !tagIsClicked,
          "bg-secondary-400": parity == 0 && !tagIsClicked,
          "bg-secondary-600": tagIsClicked,
        },
      )}
      onClick={() => {
        const newArr = tagsState.includes(tag)
          ? tagsState.filter((elem) => elem !== tag)
          : [...tagsState, tag];
        setTagsState(newArr);
      }}
    >
      {tag}
    </li>
  );
}
