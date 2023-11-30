import clsx from "clsx";
import { tagsContext } from "../lib/Context";
import { useContext } from "react";

export default function TagElement({ tag, parity }) {
  const [tagsState, setTagsState] = useContext(tagsContext);
  const tagIsClicked = tagsState.includes(tag);

  return (
    <li
      className={clsx(
        "col-auto overflow-hidden rounded border-0 p-1 text-center shadow-xl hover:bg-secondary-300",
        {
          "bg-primary-300": parity !== 0 && !tagIsClicked,
          "bg-secondary-200": parity == 0 && !tagIsClicked,
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
